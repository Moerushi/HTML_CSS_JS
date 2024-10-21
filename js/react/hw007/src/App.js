import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './redux/slices/usersSlice';
import { UsersList } from './components/UsersList/UsersList';
import { UserInfo } from './components/UserInfo/UserInfo';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <Router>
      {loading && <h1 className='loading-info'>Page is loading...</h1>}
      {error && <h1 className='loading-info'>{error}</h1>}
      {users.length && !loading ?
        <div className='container center'>

          <UsersList />

          <Routes>
            <Route path="/" element={<><p>Chose user above to show detailed information!</p></>}/>
            {users.map((user) => (
              <Route key={user.id} path={`/${user.id}`} element={<UserInfo {...user} />} />
            ))}
          </Routes>
        </div> : null}
    </Router>

  );

}


export default App;

