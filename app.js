const fileInput = document.getElementById('fileInput');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');
const increaseVolumeButton = document.getElementById('increaseVolumeButton');
const volumeText = document.getElementById('volumeText');
const loadingMessage = document.getElementById('loadingMessage');
const videoPlayer = document.getElementById('videoPlayer');

fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];

  if (file.type.startsWith('video/')) {
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
  } else {
    alert('Por favor, selecciona un archivo de vídeo válido.');
  }
});

playButton.addEventListener('click', function() {
  videoPlayer.play();
});

pauseButton.addEventListener('click', function() {
  videoPlayer.pause();
});

decreaseVolumeButton.addEventListener('click', function() {
  if (videoPlayer.volume >= 0.1) {
    videoPlayer.volume -= 0.1;
    volumeText.textContent = Math.round(videoPlayer.volume * 100);
  }
});

increaseVolumeButton.addEventListener('click', function() {
  if (videoPlayer.volume <= 0.9) {
    videoPlayer.volume += 0.1;
    volumeText.textContent = Math.round(videoPlayer.volume * 100);
  }
});

videoPlayer.addEventListener('loadstart', function() {
  loadingMessage.style.display = 'block';
});

videoPlayer.addEventListener('canplay', function() {
  loadingMessage.style.display = 'none';
});