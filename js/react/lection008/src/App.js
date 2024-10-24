import axios from 'axios';
import './App.css';
import { GistList } from './components/GistListEx2'
import { PublicGists } from './components/PublicGistsEx2'
import { WeatherComponent } from './components/WeatherComponent';
import { useState, useEffect } from 'react';
import { myUnsplashAccessKey } from './components/config'
import { ImageList } from './components/ImageList';



function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    setQuery(e.target.value);
  }

  const searchImages = async () => {
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}`
      : `https://api.unsplash.com/photos/random?count=10`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Client-ID ${myUnsplashAccessKey}`
        }
      });
      const imagesData = query ? response.data.results : response.data;
      setImages(imagesData);
    } catch (error) {
      console.error('Ошибка при выполнении запроса', error);
    }
  };

  useEffect(() => {
    searchImages();
  }, []);


  return (
    <div className="App">
      {/* Пример 1 */}
      {/* <GistList />
      <PublicGists /> */}
      {/* Пример 2 */}
      {/* <h1>Погодное приложение</h1>
      <WeatherComponent /> */}
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <h2>Unsplash galley</h2>
        <input type='text' value={query} onChange={onInputChange} placeholder='Search...'/>
        <button onClick={searchImages}>Search</button>
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
