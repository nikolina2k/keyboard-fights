export function typingGame(time: number) {
  // words will be replaced with the text we're reading from now.
  const words = ["this", "is", "an", "initial", "set", "of", "words", "to", "test", "typeracer", "feature"];
  let currentWord = words[Math.floor(Math.random() * words.length)];
  let currentInput = "";
  let startTime = Date.now();
  let timeLeft = time;
  let intervalId: NodeJS.Timeout | undefined;
  // TODO: fix the way WPM is calculated to consider total number of keystrokes/average word length/time 
  // right now it's total number of words written in 30 seconds * 2.
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