export function playSound(sound, delay) {
    const audio = document.querySelector(`#${sound}`);
    if (audio) {
      audio.currentTime = 0;
      setTimeout(() => {
        audio.play();
      }, delay);
    }
  }