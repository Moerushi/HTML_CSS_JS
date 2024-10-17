import './App.css';
import { Form } from './components/Form/Form';
import { TodoList } from './components/TodoList/TodoList';
import { Provider } from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
