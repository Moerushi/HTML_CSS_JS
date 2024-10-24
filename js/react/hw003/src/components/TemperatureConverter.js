// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertValueToFahrenheit = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
    setCelsius(e.target.value);
  }

  const convertValueToCelsius = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) setCelsius(((value - 32) * 5 / 9).toFixed(2));
    setFahrenheit(e.target.value);
  }

  useEffect(() => {
    if (celsius.length === 0 || fahrenheit.length === 0) {
      setFahrenheit('');
      setCelsius('');
    }
  }, [celsius, fahrenheit])

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ lineHeight: '50px' }}>Temperature converter</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
        <TextField onChange={convertValueToFahrenheit} id="outlined-basic" value={celsius} label="Celsius" variant="outlined" />
        <p>=</p>
        <TextField onChange={convertValueToCelsius} id="outlined-basic" label="Fahrenheit" value={fahrenheit} variant="outlined" />
      </div>
    </div>
  )
}
