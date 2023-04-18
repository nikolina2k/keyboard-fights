<!-- App.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { typingGame } from "../lib/Race";
    
    let game = typingGame(30);
    let timer: NodeJS.Timeout;
  
    onMount(() => {
      timer = setInterval(() => {
        game.tick();
        if (game.timeLeft === 0) clearInterval(timer);
      }, 1000);
    });
  
    onDestroy(() => clearInterval(timer));
  </script>
  
  <main>
    <div class="Race">
      <h1>Correctly type as much as you can!</h1>
      {#if game.timeLeft > 0}
        <div class="word">{game.currentWord}</div>
        <textarea bind:value={game.currentInput} disabled={!game.isRunning} />
        <p>Time left: {game.timeLeft}</p>
        <p>Words per minute: {game.wpm}</p>
      {:else}
        <p>Game over! Your score: {game.wpm} WPM</p>
      {/if}
    </div>
  </main>
  
  <style>
    .word {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    textarea {
      width: 100%;
      height: 5rem;
      font-size: 1.5rem;
      padding: 1rem;
    }
  .Race{
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
  
