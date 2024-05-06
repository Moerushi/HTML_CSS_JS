// определение координат пользователя, если он разрешил доступ к геолокации
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  const {latitude, longitude} = position.coords; // тут применяется дектруктизация
  console.log("Географические координаты:", latitude, longitude);
});

let watchId =navigator.geolocation.watchPosition(({coords}) => {
  console.log("Устройство обновило местоположение: ", coords.latitude, coords.longitude);
});

navigator.geolocation.clearWatch(watchId);