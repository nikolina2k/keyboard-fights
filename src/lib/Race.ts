import { writable, get } from 'svelte/store';
export const wordsStore = writable(["this", "is", "an", "initial", "set", "of", "words", "to", "test", "typeracer", "feature"]);

export function typingGame(time: number) {
  let words = get(wordsStore);
  let currentWord = words[Math.floor(Math.random() * words.length)];
  let currentInput = "";
  let startTime = Date.now();
  let timeLeft = time;
  let intervalId: NodeJS.Timeout | undefined;
  let wpm = 0;

  function tick() {
    const elapsedTime = Date.now() - startTime;
    timeLeft = time - Math.floor(elapsedTime / 1000);
    if (!intervalId) intervalId = setInterval(tick, 1000);

    if (timeLeft === 0) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  }
  return {
    get currentWord() {
      return currentWord;
    },
    get currentInput() {
      return currentInput;
    },
    set currentInput(value: string) {
      currentInput = value;
      if (currentInput === currentWord) {
        currentWord = words[Math.floor(Math.random() * words.length)];
        currentInput = "";
        wpm += 2;
      }
    },
    get isRunning() {
      return timeLeft > 0;
    },
    get timeLeft() {
      return timeLeft;
    },
    get wpm() {
      return wpm;
    },
    tick,
  };
}