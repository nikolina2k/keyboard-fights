<script lang="ts">
  import {
    getAuth,
    createUserWithEmailAndPassword,
    type UserCredential,
  } from 'firebase/auth';
  import type { ActionResult } from '@sveltejs/kit';
  import { applyAction, deserialize } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import type { ActionData } from './$types';

  export let form: ActionData;

  const createAcc = async (
    email: string | undefined,
    password: string | undefined,
    passwordAgain: string | undefined
  ): Promise<
    ActionResult<{ credential: UserCredential }, Record<string, string>>
  > => {
    if (!email || !password || !passwordAgain) {
      return {
        type: 'failure',
        status: 400,
        data: { message: 'Email or password are missing' },
      };
    }

    if (password !== passwordAgain)
      return {
        type: 'failure',
        status: 400,
        data: { message: 'Passwords dont match' },
      };

    const auth = getAuth();
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        type: 'success',
        status: 200,
        data: { credential },
      };
    } catch (error) {
      return {
        type: 'failure',
        status: 403,
        data: { message: (error as Error).message },
      };
    }
  };

  async function handleSubmit(this: HTMLFormElement): Promise<void> {
    const formData = new FormData(this);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const passwordAgain = formData.get('passwordAgain')?.toString();
    try {
      const res = await createAcc(email, password, passwordAgain);
      if (res.type !== 'success') {
        applyAction(res);
        return;
      }
      const { data } = res;
      if (!data?.credential) {
        throw new Error('Login returned success but no user credential data');
      }
      const {
        credential: { user },
      } = data;
      formData.set('token', await user.getIdToken());

      const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
      });
      const result = deserialize(await response.text());
      if (result.type === 'success') {
        await invalidateAll();
      }
    } catch (error) {
      applyAction({
        type: 'error',
        error,
      });
    }
  }
</script>

<div class="card">
  <h1>Create an account</h1>

  {#if form && !form.success && form.message}
    <div class="errorMessage">
      {form.message}
    </div>
  {/if}

  <form method="POST" on:submit|preventDefault={handleSubmit}>
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <input
      type="password"
      name="passwordAgain"
      placeholder="Confirm password"
      required
    />
    <button type="submit" class="button">Create</button>
  </form>
</div>

<style>
  .errorMessage {
    color: red;
  }

  div,
  h1,
  form,
  input {
    padding: 0;
    margin: 0;
  }

  :focus {
    outline: none;
  }

  h1 {
    font-size: 32px;
    font-weight: 300;
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  .card {
    margin: 20px auto;
    width: 343px;
    height: 464px;
    border-radius: 10px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    border: none;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  form {
    margin: 0 30px;
  }

  input {
    width: 200px;
    height: 39px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
    border: solid 1px #cbc9c9;
    margin-left: -5px;
    margin-top: 13px;
    padding-left: 10px;
  }

  button {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 20px;
    margin-top: 30px;
    margin-left: auto;
    display: inline-block;
    text-decoration: none;
    width: 50%;
    border-radius: 100px;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    background-color: #c2fbd7;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: green;
  }

  button:hover {
    top: 3px;
    cursor: pointer;
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }
</style>
