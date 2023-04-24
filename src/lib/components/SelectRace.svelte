<script lang="ts">
    import { goto } from '$app/navigation';
    import {races} from '$lib/types/UserRaces'
    function startRaceClick(){
      goto('../race');
    }
</script>

<div class="selectRace">
    <h1>Select race </h1>
    Please pick the dictionary of words you'd like to race with:
    <li>
      <button on:click={startRaceClick} type="button" class="join">Random words</button>
    </li>
</div>

<style>
  .selectRace{
    color: white;
    font-family: sans-serif;
    padding: 2rem;
    margin: 20px auto;
    width: auto; 
    height: 464px;
    border-radius: 10px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    border: none;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);display: flex;
    flex-direction: column;
    justify-content: top;
    text-align: left;
    
    white-space: nowrap;
  }

  button {
    cursor: pointer;
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
    background-color: white;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: black;
  }

  button:hover {
  top: 3px;
  cursor: pointer;
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05);
  }

</style>