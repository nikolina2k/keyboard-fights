<script lang="ts">
  //import { Link } from '../../.svelte-kit/link'
  // import SelectRace from "./SelectRace.svelte";
  import { getCollection } from '../components/UserRaces';
  import { goto } from '$app/navigation';
  function joinRaceClick() {
    getCollection().then(() => {
      goto('./select-race');
    });
  }
  function createRaceClick() {
    goto('./create-race');
  }
</script>

<div class="buttons">
  <button on:click={joinRaceClick} type="button" class="join"
    >Join a typing race</button
  >
  <button on:click={createRaceClick} type="button" class="create"
    >Create a typing race</button
  >
</div>

<style>
  .buttons {
    display: table;
    margin: 20px auto;
    gap: 2rem;
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
    padding: 2rem;
  }

  button {
    border-radius: 100px;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .join {
    background-color: #db0972;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: white;
  }

  .join:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }

  .create {
    background-color: #da2b82;
    box-shadow: rgba(44, 177, 187, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 170, 187, 0.15) 0 1px 2px, rgba(44, 170, 187, 0.15) 0 2px 4px,
      rgba(44, 165, 187, 0.15) 0 4px 8px, rgba(44, 182, 187, 0.15) 0 8px 16px,
      rgba(44, 177, 187, 0.15) 0 16px 32px;
    color: white;
  }

  .create:hover {
    box-shadow: rgba(44, 177, 187, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 177, 187, 0.25) 0 1px 2px, rgba(44, 177, 187, 0.25) 0 2px 4px,
      rgba(44, 170, 187, 0.25) 0 4px 8px, rgba(44, 170, 187, 0.25) 0 8px 16px,
      rgba(44, 170, 187, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }
</style>
