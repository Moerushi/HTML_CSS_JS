import style from './Message.module.css';

export let Message = ({from, to, text}) =>
(<div className={style.card}>
    <p><span>From:</span> {from}</p>
    <p><span>To:</span> {to}</p>
    <p><span>Message:</span></p>
    <p>{text}</p>
</div>);