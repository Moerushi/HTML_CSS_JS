import { useDispatch } from "react-redux";

function Ex2Button() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: 'BUTTON_CLICKED', payload: 'Hello, world!' });
    };

    return <button onClick={handleClick}>Click me!</button>
}

export default Ex2Button;