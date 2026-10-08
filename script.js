const video = document.getElementById('hero-video');
const toggle = document.getElementById('video-toggle');
function syncVideoButton(){toggle.textContent=video.paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',video.paused?'Play video':'Pause video');}
toggle.addEventListener('click',()=>{if(video.paused){video.play().catch(()=>{});}else{video.pause();}});
video.addEventListener('play',syncVideoButton);video.addEventListener('pause',syncVideoButton);
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){video.autoplay=false;video.pause();}
document.getElementById('year').textContent=new Date().getFullYear();
