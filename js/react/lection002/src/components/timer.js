import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // что должно выполниться - функция
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            // в момент времени для удаления счетчика set timeout и пишем тут clear timeout
            clearInterval(timer);
        }
        // массив нужен для того чтобы обновилось в момент монтирования то пустые
        // если не нужен, то убираем
        // если зависит от пропса то пишем пропс

    }, [])

    return (
        <div>
            <p>Время {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;