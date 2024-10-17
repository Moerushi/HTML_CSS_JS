export const Button = ({ children, handlerClick = () => { } }) => { // если нет функции, то просто пустое
    return (
        <button onClick={handlerClick}>{children}</button>
    );
}