import { date } from '../CurrentTime/CurrentTime'

export function Greeting() {
  let greet = '';
  const hours = date.getHours();
  if (hours >= 0 && hours <= 12) {
    greet = 'Good morning';
  } else if (hours > 12 && hours < 22) {
    greet = 'Good day';
  } else {
    greet = 'Good night';
  }
  return (
    <h1>{greet}, react on Vite!</h1>
  );
}