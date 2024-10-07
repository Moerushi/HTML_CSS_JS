import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export const TextDispalyForm = () => {

    const hidden = {
        display: "none"
    }

    const active = {
        display: "block"
    }

    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');

    const changeValue = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        setDisplayedText(text);
        setText(() => '');
    }

    return (
        <div>
            <TextField fullWidth style={{ width: 500, maxWidth: '100%' }} value={text} label="Введите текст" id="fullWidth" onChange={changeValue} />
            <br />
            <Button onClick={handleClick} variant="contained" value={text}>Отобразить текст</Button>
            <Card style={displayedText ? active : hidden} variant="outlined">
                <Typography variant="h5">{displayedText}</Typography>
            </Card>
        </div>
    );
}