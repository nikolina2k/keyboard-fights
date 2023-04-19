<script lang="ts">
    //import { Link } from '../../.svelte-kit/link'
    import SelectRace from "./SelectRace.svelte";
    import { goto } from '$app/navigation';
    function joinRaceClick(){
      goto('./select-race');
    }
</script>

<div class="home">
  <div class="buttons">
    <button on:click={joinRaceClick} type="button" class="join">Join a typing race</button>
    <button type="button" class="create">Create a typing race</button>
    <button type="button" class="practice">Practice typing</button>
  </div>
</div>

<style>

  .home {
    display: table;
    margin: auto;
  }
  
  .buttons {
    margin: auto;
    gap: 2rem;
    width: 303px; 
    height: 464px;
    border-radius: 15px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    border: none;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  button {
    border-radius: 100px;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
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
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: white;
  }

  .join:hover {
    box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    transform: scale(1.05);
  }

  .practice {
    background-color: #dd3489;
    box-shadow: rgba(185, 187, 44, 0.2) 0 -25px 18px -14px inset,rgba(165, 187, 44, 0.15) 0 1px 2px,rgba(177, 187, 44, 0.15) 0 2px 4px,rgba(177, 187, 44, 0.15) 0 4px 8px,rgba(185, 187, 44, 0.15) 0 8px 16px,rgba(173, 187, 44, 0.15) 0 16px 32px;
    color: white;
  }

  .practice:hover {
    box-shadow: rgba(173, 187, 44, 0.35) 0 -25px 18px -14px inset,rgba(177, 187, 44, 0.25) 0 1px 2px,rgba(173, 187, 44, 0.25) 0 2px 4px,rgba(165, 187, 44, 0.25) 0 4px 8px,rgba(161, 187, 44, 0.25) 0 8px 16px,rgba(161, 187, 44, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }

  .create {
    background-color: #da2b82;
    box-shadow: rgba(44, 177, 187, 0.2) 0 -25px 18px -14px inset,rgba(44, 170, 187, 0.15) 0 1px 2px,rgba(44, 170, 187, 0.15) 0 2px 4px,rgba(44, 165, 187, 0.15) 0 4px 8px,rgba(44, 182, 187, 0.15) 0 8px 16px,rgba(44, 177, 187, 0.15) 0 16px 32px;
    color: white;
  }

  .create:hover {
    box-shadow: rgba(44, 177, 187, 0.35) 0 -25px 18px -14px inset,rgba(44, 177, 187, 0.25) 0 1px 2px,rgba(44, 177, 187, 0.25) 0 2px 4px,rgba(44, 170, 187, 0.25) 0 4px 8px,rgba(44, 170, 187, 0.25) 0 8px 16px,rgba(44, 170, 187, 0.25) 0 16px 32px;
    transform: scale(1.05);
  }

</style>