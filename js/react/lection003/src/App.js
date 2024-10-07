import './App.css';
import InputForm from './components/form';
import BasicList from './components/list';
import Nav from './components/menu';
import ParentCounter from './components/parent';
import Student from './components/propType';
import HoverRating from './components/rating';
import BasicSwitches from './components/switch';

function App() {
  return (
    <div>

      <ParentCounter />
      <InputForm />
      <Nav />
      <HoverRating />
      <BasicSwitches />
      <BasicList />
      <Student name='Dima' age={30} isStudent={true}/>
    </div>
  );
}

export default App;
