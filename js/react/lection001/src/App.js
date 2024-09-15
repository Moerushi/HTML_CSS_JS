import { getFCP } from 'web-vitals';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Hello, {props.name}</h1>
      <Article number='1' name='Info'/>
      <Article number='2' name='Blog'/>
    </div>
  );
}

function Article({name, number}) { // применили деструктуризацию
  let toggle = false;
  return (
    <div>
      <h2 className='heading'>Article #{number} - {name}</h2>
      <a style={{color: toggle ? 'green' : 'orange'}} href='#'>Read article #{number} - {name}</a>
    </div>
  );
}

export default App;
