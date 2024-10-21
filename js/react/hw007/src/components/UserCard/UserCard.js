import './UserCard.css'
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, name }) => {
    const dispatch = useDispatch();

    const handleClick = (newId) => {
        dispatch(fetchUser(newId));
    }

    return (
        <Link to={`/${id}`} className="userCard link" onClick={() => handleClick(id)}>
            {name}
        </Link>

    )
}


// to={name.toLowerCase().trim().replace(/[\s\W]/g, '')}