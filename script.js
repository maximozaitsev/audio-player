const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const audio = new Audio("./audio/beyonce.mp3");
const image = document.querySelector(".player-image");
const progressBar = document.getElementById("progress-bar");

let currentScale = 1.0;
let currentSongIndex = 0;
let isPlaying = false;

playButton.addEventListener("click", function () {
  if (audio.paused) {
    currentScale += 0.3;
    image.style.transform = `scale(${currentScale})`;
    audio.play();
    playButton.src = "./svg/pause.png";
    isPlaying = true;
  } else {
    currentScale = 1.0;
    image.style.transform = `scale(${currentScale})`;
    audio.pause();
    playButton.src = "./svg/play.png";
    isPlaying = false;
  }
});

nextButton.addEventListener("click", function () {
  currentSongIndex++;
  if (currentSongIndex >= songList.length) {
    currentSongIndex = 0;
  }
  const nextSong = songList[currentSongIndex];
  audio.src = nextSong.path;
  audio.currentTime = 0;
  if (isPlaying) {
    audio.play();
  }
  image.src = nextSong.cover;
  const songTitleElement = document.querySelector(".song");
  const songArtistElement = document.querySelector(".author");
  const background = document.querySelector(".background-image");
  songTitleElement.textContent = nextSong.title;
  songArtistElement.textContent = nextSong.artist;
  background.src = nextSong.cover;
});

previousButton.addEventListener("click", function () {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songList.length - 1;
  }
  const previousSong = songList[currentSongIndex];
  audio.src = previousSong.path;
  audio.currentTime = 0;
  if (isPlaying) {
    audio.play();
  }
  image.src = previousSong.cover;
  const songTitleElement = document.querySelector(".song");
  const songArtistElement = document.querySelector(".author");
  const background = document.querySelector(".background-image");
  songTitleElement.textContent = previousSong.title;
  songArtistElement.textContent = previousSong.artist;
  background.src = previousSong.cover;
});

const currentTimeDisplay = document.querySelector(".current-time");

audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  currentTimeDisplay.textContent = formattedTime;
  progressBar.value = (currentTime / audio.duration) * 100;
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

progressBar.addEventListener("input", function () {
  const seekToPercent = progressBar.value;
  const seekToTime = (seekToPercent / 100) * audio.duration;
  audio.currentTime = seekToTime;
});

// Объявление массива песен
const songList = [
  {
    path: "./audio/beyonce.mp3",
    cover: "./img/lemonade.png",
    title: "Don't Hurt Yourself",
    artist: "Beyonce",
  },
  {
    path: "./audio/dontstartnow.mp3",
    cover: "./img/dontstartnow.png",
    title: "Dua Lipa",
    artist: "Don't Start Now",
  },
];
