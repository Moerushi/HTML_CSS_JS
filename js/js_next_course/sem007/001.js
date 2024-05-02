// 1. Создание медиа плеера
// 2. Создать файл index.html
// 3. Создать папку img в которую загрузить изображение кнопок play, pause
// 4. Скачать произвольное видео из интернета
// 5. Добавить Тег видео в html
// 6. Продумать внешний вид progress и volume
// 7. Продумать время проигрывателя
// 8. Реализовать функционал своего собственного видео-плеера

// 1. Скачать все картинки (найти макет по желанию)
// 2. Добавляете html добавляете все элементы для управления видео
const contEl = document.querySelector('.container');

const videoCont = document.createElement('div');
videoCont.classList.add('video-container');
contEl.appendChild(videoCont);

const videoEl = document.createElement('video');
videoEl.classList.add('video');
videoEl.classList.add('shadowed');
videoEl.setAttribute('src', './video/video.mp4');
videoCont.appendChild(videoEl);

// 3. Реализуем кнопки play, pause, repeat

function addShadow() {
  pauseEl.classList.remove('hidden');
  videoEl.classList.add('shadowed');
}

function delShadow() {
  pauseEl.classList.add('hidden');
  videoEl.classList.remove('shadowed');
}

function playVideo() {
  videoEl.play();
  playEl.classList.add('hidden');
  videoEl.classList.remove('shadowed');
  repeatElem.classList.add('hidden');

  videoCont.addEventListener('mouseover', addShadow);
  videoCont.addEventListener('mouseout', delShadow);
}

const playEl = document.createElement('div');
playEl.classList.add('play');
videoCont.appendChild(playEl);

const pauseEl = document.createElement('div');
pauseEl.classList.add('pause');
pauseEl.classList.add('hidden');
videoCont.appendChild(pauseEl);

const repeatElem = document.createElement('div');
repeatElem.classList.add('repeat');
repeatElem.classList.add('hidden');
videoCont.appendChild(repeatElem);

videoEl.addEventListener('ended', () => {
  repeatElem.classList.remove('hidden');
  videoEl.classList.add('shadowed');
  videoCont.removeEventListener('mouseover', addShadow);
  videoCont.removeEventListener('mouseout', delShadow);
});

playEl.addEventListener('click', playVideo);
repeatElem.addEventListener('click', playVideo);

pauseEl.addEventListener('click', () => {
  videoEl.pause();
  videoEl.classList.add('shadowed');
  playEl.classList.remove('hidden');
  pauseEl.classList.add('hidden');

  videoCont.removeEventListener('mouseover', addShadow);
  videoCont.removeEventListener('mouseout', delShadow);

});

// 4. время и ползунки
const controlElems = document.createElement('div');
controlElems.classList.add('control-elems');
contEl.appendChild(controlElems);

const rangeEl = document.createElement('input');

rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max', '100');
rangeEl.setAttribute('value', '0');
controlElems.appendChild(rangeEl);
rangeEl.addEventListener('input', (e) => {
  videoEl.currentTime = e.target.value / 100 * videoEl.duration;
});
videoEl.addEventListener('timeupdate', () => {
  let newTime = Math.round((videoEl.currentTime / videoEl.duration) * 100, 0);
  rangeEl.setAttribute('value', newTime);
});

const volumeBox = document.createElement('div');
volumeBox.classList.add('volume-box');
controlElems.appendChild(volumeBox);

const volumeIcon = document.createElement('div');
volumeIcon.classList.add('volume-icon');
controlElems.appendChild(volumeIcon);

const volumeDown = document.createElement('div');
volumeDown.classList.add('volume-down');
volumeDown.classList.add('hidden');
controlElems.appendChild(volumeDown);

const volumeMute = document.createElement('div');
volumeMute.classList.add('volume-mute');
volumeMute.classList.add('hidden');
controlElems.appendChild(volumeMute);

const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.setAttribute('type', 'range');
volumeEl.setAttribute('min', '0');
volumeEl.setAttribute('max', '100');
volumeEl.setAttribute('value', '0');
volumeBox.appendChild(volumeEl);

videoEl.addEventListener('loadeddata', () => {
  volumeEl.setAttribute('value', videoEl.volume * 100);
});

volumeEl.addEventListener('input', (e) => {
  videoEl.volume = e.target.value / 100;
  if (videoEl.volume <= 1 && videoEl.volume >= 0.5) {
    volumeIcon.classList.remove('hidden');
    volumeDown.classList.add('hidden');
    volumeMute.classList.add('hidden');
  } else if (videoEl.volume < 0.5 && videoEl.volume > 0.05){
    volumeIcon.classList.add('hidden');
    volumeDown.classList.remove('hidden');
    volumeMute.classList.add('hidden');
  } else if (videoEl.volume <= 0.1) {
    volumeIcon.classList.add('hidden');
    volumeDown.classList.add('hidden');
    volumeMute.classList.remove('hidden');
  }
});

// 5. Собираем внешний вид