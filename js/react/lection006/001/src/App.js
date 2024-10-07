import './App.css';
import store from './store';
import { Provider } from 'react-redux'
import CounterComponent from './components/CounterComponent';
import ButtonComponent from './components/ButtonComponent';
import ButtonComponentMinus from './components/ButtonComponentMinus';


const App = () => {
  return (
      <Provider store={store}>
        <div>
          <CounterComponent />
          <ButtonComponent />
      <ButtonComponentMinus />
        </div>
      </Provider>
  );
}

export default App;
