import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import './UsersList.css';

export const UsersList = () => {

    const { users } = useSelector((state) => state.users);

    return (
        <>
            <h1>Users list</h1>
            <div className="usersList">
                {users.map(user => <UserCard key={user.id} {...user} />)}
            </div>
        </>

    )
}
