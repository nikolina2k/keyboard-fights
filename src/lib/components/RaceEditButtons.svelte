<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { auth } from '../../stores/auth';
  import { deleteUserRace } from '$lib/components/UserRaces';

  export let title: string;

  const deleteRace = async () => {
    if (!$auth || !$auth.uid) {
      await goto('/');
      return { count: 0, items: [] };
    }
    await deleteUserRace($auth.uid, title);
  };
</script>

<div>
  <button
    on:click={() => goto(`${base}/personal-races/${title}/edit`)}
    class="race-button">Edit</button
  >
  <button on:click={deleteRace} class="race-button">Delete</button>
</div>

<style>
  .race-button {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 20px;
    margin-left: auto;
    margin-right: 5px;
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
  }

  button:hover {
    top: 3px;
    cursor: pointer;
    transform: scale(1.05);
  }
</style>
