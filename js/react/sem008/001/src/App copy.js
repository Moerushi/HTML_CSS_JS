import './App.css';
import { useState } from 'react';

function App() {

  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error({ message: response.message });
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      setJoke('Failed to catch!');
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>Jokes</h1>
      <button onClick={fetchJoke} disabled={loading}>{loading ? 'Loading...' : 'Get new joke'}</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
