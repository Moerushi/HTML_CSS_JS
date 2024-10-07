import './App.css';
import { Counter } from './components/Counter';
import { Greeting } from './components/Greeting';
import { MessagesList } from './components/MessagesList';
import { TextDispalyForm } from './components/TextDispalyForm';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import data from './data.json';

function App() {
  return (
    <>
      <Greeting name='Nick' />
      <Counter />
      <MessagesList messages={data} />
      <TextDispalyForm />
      <ThemeSwitcher />
    </>
  );
}

export default App;
