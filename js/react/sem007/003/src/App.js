import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsersRequest } from './store/userReducer';

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchUsersRequest())
   },[dispatch])

  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>{
        users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
      </ul> : null}
    </div>
  );
}

export default App;
