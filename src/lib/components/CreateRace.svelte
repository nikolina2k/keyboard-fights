<script lang="ts">
  import {
    splitWords,
    validateDictionary,
    makeDictionary,
    formatWords,
  } from '$lib/Dictionary';
  import { createUserRace } from '$lib/components/UserRaces';
  import { get, writable } from 'svelte/store';
  import { auth } from '../../stores/auth';

  export let value = '';
  export let title = '';
  let errors = writable([] as string[]);

  async function submitDictionary(this: HTMLFormElement, event: unknown) {
    let words = splitWords(value);
    let validateExceptions = validateDictionary(words.concat([title]));
    if (validateExceptions.length) {
      $errors = validateExceptions;
      return;
    }

    words = makeDictionary(words);
    let user = get(auth);

    if (user === null) {
      $errors = ['User must be signed in'];
      return;
    }
    $errors = [];
    await createUserRace(user.uid, { title, words });
  }

  const formatText = () => {
    let words = splitWords(value);
    words = formatWords(words);
    value = words.join(' ');
  };
</script>

<div class="container">
  <input bind:value={title} placeholder="title" />
  <textarea bind:value class="dict-input" placeholder="Your words" />

  {#if $errors.length}
    <ul>
      {#each $errors as error}
        <li class="error-message">{error}</li>
      {/each}
    </ul>
  {/if}
  <div>
    <button class="submit-button" on:click={submitDictionary}
      >Submit user race</button
    >
    <button class="submit-button" on:click={formatText}>Format text</button>
  </div>
</div>

<style>
  .container {
    font-family: sans-serif;
    padding: 2rem;
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
    justify-content: top;
  }

  textarea {
    height: 150px;
    resize: none;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .submit-button {
    min-height: 25px;
    cursor: pointer;
    font-weight: bold;
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
    background-color: white;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: black;
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

  .error-message {
    color: red;
  }
</style>
