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
      font-weight: bold;
          padding: 12px 16px;
      margin: 0 8px;
          position: relative;
      cursor: pointer;
          white-space: nowrap;
  }
</style>