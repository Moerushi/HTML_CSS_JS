import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from './config';

export const WeatherComponent = () => {
    const defaultCity = 'Москва';
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const getWeather = () => {
        if (!city) return;

        const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiUrl}`;

        axios.get(myApiUrl)
            .then((response) => {
                setWeatherData(response.data);
                setError(null);
            })
            .catch((err) => {
                setError('Город не найден');
                setWeatherData(null);
            })
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div>
            <input type='text' placeholder='Введите город' value={city} onChange={handleChange} />
            <button onClick={getWeather}>Поиск</button>
            {error && <div>{error}</div>}
            {weatherData && (
                <div>
                    <h3>{weatherData.name}</h3>
                    <p>Температура: {Math.round(weatherData.main.temp - 273.15)} C</p>
                    <p>Влажность: {weatherData.main.humidity} %</p>
                    <p>Давление: {weatherData.main.pressure} hPa</p>
                    <p>Скорость ветра: {weatherData.wind.speed} m/s</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}
