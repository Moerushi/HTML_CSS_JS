import { Link } from 'react-router-dom';
import './UserInfo.css'
import { useSelector } from 'react-redux';

export const UserInfo = (props) => {
    const { user, loadingUser, errorUser } = useSelector((state) => state.user);
    return (
        <>
            {loadingUser && <p>User information is loading...</p>}
            {errorUser && <p>{errorUser}</p>}
            {!errorUser && !loadingUser ?
                <div className="info">
                    <h2>{props.name}</h2>
                    <p>E-mail: {props.email}</p>
                    <p>Tel: {props.phone}</p>
                    <p>{props.company.name}</p>
                    <a href={`https://${props.website}`}>{props.website}</a>
                    <Link className='clear' to='/'>Clear</Link>
                </div>
                : null
            }
        </>

    )
}
