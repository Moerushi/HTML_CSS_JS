import { Message } from './Components/Message/Message';
import s from './App.module.css'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', lineHeight: '60px', overflowWrap: 'break-word'}}>Some messages made with React</h1>
      <div className={s.cards}>
        <Message from='Nikita' to='Alex' text='Hello! How is it going?' />
        <Message from='Alex' to='Nikita' text='Hi! Fine! And how is yours?' />
        <Message from='Nikita' to='Alex' text='Not bad! What is your plans for tonight?' />
        <Message from='Alex' to='Nikita' text='Absolutely nothing. Yours?' />
        <Message from='Nikita' to='Alex' text='Planning cinema evening. Keep me company?' />
        <Message from='Alex' to='Nikita' text='Sure! See you later!' />
      </div>
    </div>
  );
}

export default App;
