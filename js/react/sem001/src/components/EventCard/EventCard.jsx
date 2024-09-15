import style from './EventCard.module.css';

export function EventCard({name, date, place}) {
    return (
        <div className={style.card}>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{place}</p>
        </div>
    );
}