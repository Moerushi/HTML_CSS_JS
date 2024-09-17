import './App.css';
import Counter from './components/Counter/Counter';
import TextInput from './components/TextInput/TextInput';
import Timer from './components/Timer/Timer';
import ToDoList from './components/ToDoList/ToDoList';


function App() {
  return (
    <>
      <Counter />
      <TextInput />
      <ToDoList/>
      <Timer />
    </>
  );
}

export default App;
