import './App.css';
import { Form } from './components/Form/Form';
import { TodoList } from './components/TodoList/TodoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ProductsList } from './components/ProductsList/ProductsList';
import { FavoritesList } from './components/FavoritesList/FavoritesList';

const products = [
  { id: 1, name: 'Good 1', description: 'Description 1', price: 75000 },
  { id: 2, name: 'Good 2', description: 'Description 2', price: 70000 },
  { id: 3, name: 'Good 3', description: 'Description 3', price: 71000 },
  { id: 4, name: 'Good 4', description: 'Description 4', price: 79000 },
  { id: 5, name: 'Good 5', description: 'Description 5', price: 7000 }
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* Задание 1 */}
        {/* <Form />
        <TodoList /> */}
        {/* Задание 2 */}
        <FavoritesList products={products}/>
        <ProductsList products={products} />
      </div>
    </Provider>
  );
}

export default App;
