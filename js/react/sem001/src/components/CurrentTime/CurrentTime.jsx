const date = new Date();

function CurrentTime() {
    return (
        <p>{date.toLocaleTimeString()}</p>
    );
};

export {CurrentTime, date}

// export const CurrentTime = () => {
//     const date = new Date().toLocaleTimeString();
//     return (
//         <p>Текущее время: {date}</p>
//     );
// };
