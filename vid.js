const video = document.createElement('video');
video.src = 'Web Vids/DogDaysShort.mp4';
video.controls = true;
video.muted = false;
video.height = 320;
video.width = 480;

const box = document.getElementById('box-vid');
box.appendChild(video);