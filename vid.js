// Create video element
const video = document.createElement('video');

// Use local file
// video.src = 'video.mp4';

// Use remote file
video.src =
  'Web Vids/DogDaysShort.mp4';


video.controls = true;
video.muted = false;
video.height = 320; // in px
video.width = 480; // in px

const box = document.getElementById('box-vid');

// Include in HTML as child of #box
box.appendChild(video);