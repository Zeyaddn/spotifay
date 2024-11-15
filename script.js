const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

var playButton = document.getElementById('playButton');
var audio = new Audio('./سورة الإخلاص ياسر الدوسري mp3.mp3');

playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="bx bx-pause"></i>';
  } else {
    audio.pause();
    audio.currentTime = 0;
    playButton.innerHTML = '<i class="bx bx-play"></i>';
  }
});
