let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let backbtn = document.getElementsByClassName("bi-skip-backward-fill");
let nextbtn = document.getElementsByClassName("bi-skip-forward-fill");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains('bi-pause-fill')) {
    song.pause();
    ctrlIcon.classList.remove('bi-pause-fill');
    ctrlIcon.classList.add('bi-play');
  } else {
    song.play();
    ctrlIcon.classList.remove('bi-play');
    ctrlIcon.classList.add('bi-pause-fill');
  }
}

if (song.paused === false) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

function Back() {
  song.currentTime -= 10;
  progress.value = song.currentTime;
}

function Next() {
  song.currentTime += 10;
  progress.value = song.currentTime;
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('bi-pause-fill');
  ctrlIcon.classList.remove('bi-play');
}