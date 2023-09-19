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

const currentTimeDisplay = document.querySelector(".current-time");

audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  currentTimeDisplay.textContent = formattedTime;
});

const durationTimeDisplay = document.querySelector(".duration-time");

audio.addEventListener("loadedmetadata", function () {
  const duration = audio.duration;
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);
  const formattedDuration = `${durationMinutes}:${durationSeconds
    .toString()
    .padStart(2, "0")}`;
  durationTimeDisplay.textContent = formattedDuration;
});
