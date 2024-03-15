const button = document.querySelector('.press-button'); // чтобы найти на веб странице по селектору

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * letters.length)]; // random рандом, floor округялет вниз
  }
  return color;
}

const getRandomGradient = () => {
  const firstColor = getRandomColor();
  const secondColor = getRandomColor();
  const thirdColor = getRandomColor();
  const gradient = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${firstColor}, ${secondColor}, ${thirdColor})`;
  return gradient;
}

button.addEventListener('click', () => {
  const gradient = getRandomGradient();
  // button.style.backgroundImage = gradient;
  document.body.style.backgroundImage = gradient;
}); // на кнопу добавить событие по щелчку