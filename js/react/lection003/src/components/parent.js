import { useState } from "react";
import Button from '@mui/material/Button';

function ParentCounter() {
    const [count, setCount] = useState(0);
    const upCount = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>Parent</h2>
            <ChildCount count={count} />
            <Button variant="contained" onClick={upCount}>Counter +1</Button>
        </div>
    );
}

function ChildCount({ count }) {
    return (
        <div>
            <p>Counter inside</p>
            <p>Value of counter: {count}</p>

        </div>
    );
}

export default ParentCounter;
