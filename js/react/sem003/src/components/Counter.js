import { useState, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [block, setBlock] = useState(true);

    const upCounter = () => {
        setCounter(prev => prev + 1);
    };

    const downCounter = () => {
        setCounter(prev => prev - 1);
    };

    useEffect(() => {
        if (counter > 0) {
            setBlock(false);
        } else {
            setBlock(true);
        }
    }, [counter]);

    return (
        <div>
            <Button onClick={upCounter} variant="contained">Add</Button>
            <h2>{counter}</h2>
            <Button onClick={downCounter} disabled={block} variant="contained">Subtract</Button>
        </div>
    );
}
