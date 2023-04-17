<script lang="ts">
    import { goto } from '$app/navigation';
    function startRaceClick(){
      goto('../race');
    }
</script>
<div class="selectRace">
    <h1>Select race </h1>
    So far we only support random word races.
    Later on you'll be allowed to pick your reference.
    <button on:click={startRaceClick} type="button" class="join">Start </button>
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