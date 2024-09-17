import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={updateCount}>Clicked {count} time(s)</button>
        </>
    );
}

export default Counter;