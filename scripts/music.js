function togglePlay() {
  var audio = document.getElementById('audio');
  var playButton = document.getElementById('playButton');

  if (audio.paused) {
    audio.play();
    playButton.innerHTML = 'PAUSE';
  } else {
    audio.pause();
    playButton.innerHTML = 'Tænd Klokkerne!';
  }
}
