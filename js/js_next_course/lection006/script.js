const audioEl = document.querySelector('.audio');

audioEl.addEventListener('play', function (e) {
  console.log('Вы нажали плэй');
});

audioEl.addEventListener('pause', function (e) {
  console.log('Вы нажали на паузу');
});

const recorder = document.getElementById('recorder');
const player = document.getElementById('player');
recorder.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const url = URL.createObjectURL(file);
  player.src = url;
});


  // const player = document.getElementById('player')

  // const handleSuccess = (stream) => {
  //   if (window.URL) {
  //     player.srcObject = stream
  //   } else {
  //     player.src = stream
  //   }
  // }

  navigator.mediaDevices.getUserMedia({audio: true, video: false})
    .then(handleSuccess)

