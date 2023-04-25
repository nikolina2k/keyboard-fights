<!-- App.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { typingGame } from "../Race";
    import {words} from '../Race'
    import { goto } from '$app/navigation';
    let game = typingGame(30);
    let timer: ReturnType<typeof setInterval>;
  
    onMount(() => {
      timer = setInterval(() => {
        game.tick();
        if (game.timeLeft === 0) clearInterval(timer);
      }, 1000);
    });
    function handleButtonClick() {
      goto('../select-race');
    }
    onDestroy(() => clearInterval(timer));
</script>
  
    <div class="Race">
      {#if game.timeLeft > 0}
        <h1>Correctly type as much as you can!</h1>
        <div class="word">{game.currentWord}</div>
        <textarea bind:value={game.currentInput} disabled={!game.isRunning} />
        <p>Time left: {game.timeLeft}</p>
        <p>Words per minute: {game.wpm}</p>
      {:else}
        <h1>Game over! Your score: {game.wpm} WPM</h1>
        <button on:click={() => handleButtonClick()}>
          Race again!
        </button>
      {/if}
    </div>
  <div class="Words">
    <h3>
      Words used:
    </h3>
    {#each words as word}
    <li>
        {word}
    </li>
  {/each}
  </div>
  
  <style>
    .word {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    textarea {
      width: auto;
      height: auto;
      font-size: 1.5rem;
      padding: 1rem;
    }
  .Race{
    color: white;
    font-family: sans-serif;
    padding: 1rem;
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
  .Words{
    position: relative;
    margin-right: 0px;
    margin-left: auto;
    color: white;
    float: right;
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
  </style>
  
