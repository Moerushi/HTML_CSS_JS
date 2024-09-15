import style from './Message.module.css';

export let Message = (props) =>
(<div className={style.card}>
    <p><span>From:</span> {props.from}</p>
    <p><span>To:</span> {props.to}</p>
    <p><span>Message:</span></p>
    <p>{props.text}</p>
</div>);