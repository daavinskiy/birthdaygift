document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const toggleButton = document.getElementById("music-toggle");
    const volumeSlider = document.getElementById("volume-slider");

    music.volume = volumeSlider.value;

    toggleButton.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        toggleButton.textContent = "⏸️ Пауза";
      } else {
        music.pause();
        toggleButton.textContent = "▶️ Включить музыку";
      }
    });

    volumeSlider.addEventListener("input", function () {
      music.volume = volumeSlider.value;
    });
  });
  