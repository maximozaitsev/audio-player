const playButton = document.getElementById("play");
const audio = new Audio("./audio/beyonce.mp3");
const image = document.querySelector(".player-image");

let currentScale = 1.0;

playButton.addEventListener("click", function () {
  if (audio.paused) {
    currentScale += 0.3;
    image.style.transform = `scale(${currentScale})`;
    audio.play();
    playButton.src = "./svg/pause.png";
  } else {
    currentScale = 1.0;
    image.style.transform = `scale(${currentScale})`;
    audio.pause();
    playButton.src = "./svg/play.png";
  }
});
