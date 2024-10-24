import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJoke } from './redux/slices/jokeSlice';

function App() {
  const {loading, value, error} = useSelector((state) => state.joke);
  const dispatch = useDispatch();
  const url = 'https://api.chucknorris.io/jokes/random';

  return (
    <div className="App">
      <h1>Jokes</h1>
      <button onClick={() => dispatch(fetchJoke(url))} disabled={loading}>{loading ? 'Loading...' : 'Get new joke'}</button>
      <p>{error ? error.message || 'Something goes wrong!' : value}</p>
      
    </div>
  );
}

export default App;
