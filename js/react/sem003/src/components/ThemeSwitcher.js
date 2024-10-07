import { Content } from "./Content"
import {useState} from 'react'
import Button from '@mui/material/Button';

export const ThemeSwitcher = () => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
}

  return (
    <div>
        <Content theme={theme}/>
        <Button variant="contained" onClick={toggleTheme}>Switch theme</Button>

    </div>
  )
}
