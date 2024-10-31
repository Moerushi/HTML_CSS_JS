import { Link } from 'react-router-dom';
import './UserInfo.css'
import { useSelector } from 'react-redux';

export const UserInfo = () => {
    const { user, loadingUser, errorUser } = useSelector((state) => state.user);
    return loadingUser ? (<p>User information is loading...</p>) : errorUser ? (<p>{errorUser}</p>) : (
                <div className="info">
                    <h2>{user.name}</h2>
                    <p>E-mail: {user.email}</p>
                    <p>Tel: {user.phone}</p>
                    <p>{user.company.name}</p>
                    <a href={`https://${user.website}`}>{user.website}</a>
                    <Link className='clear' to='/'>Clear</Link>
                </div>
    )
}
