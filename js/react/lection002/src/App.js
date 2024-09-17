import './App.css';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/ref';
import MessageList from './components/list';


function App() {
  return (
    <div>
      <Counter />
      <Show data='Новый текст из компонента' />
      <Show data='Другой текст из компонента' />
      <Timer />
      <RefExample />
      <MessageList />
    </div>
  );
}

export default App;
