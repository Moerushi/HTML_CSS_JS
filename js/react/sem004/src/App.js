import { Box } from "./components/Box";
import { List } from "./components/List";
import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes, NavLink, Switch } from 'react-router-dom';
import './App.css';
import { ListPage } from "./components/ListPage";
import { DetailPage } from "./components/DetailPage";

const arr = [
  { id: 1, text: 'text 1' },
  { id: 2, text: 'text 2' },
  { id: 3, text: 'text 3' },
  { id: 4, text: 'text 4' },
]

const books = [
  {id: 1, title: 'Book 1', author: 'Me', price: 1000},
  {id: 2, title: 'Book 2', author: 'You', price: 2000},
  {id: 3, title: 'Book 3', author: 'He', price: 3000},
  {id: 4, title: 'Book 4', author: 'She', price: 4000},
  {id: 5, title: 'Book 5', author: 'They', price: 5000},
  {id: 6, title: 'Book 6', author: 'We', price: 6000}
]

const App = () => {

  const renderItem = (item, index) => {
    const style = { borderBottom: `1px solid ${index % 2 ? 'green' : 'red'}` }
    return <li key={item.id} style={style}>{item.text}</li>
  }

  return (

    <Router>
      <nav className="nav">
        <NavLink className='link' to='/'>Main</NavLink>
        <NavLink className='link' to='/about'>About Us</NavLink>
        <NavLink className='link' to='/list'>List</NavLink>
        <NavLink className='link' to='/task1'>Task 1</NavLink>
        <NavLink className='link' to='/task2'>Task 2</NavLink>
      </nav>
      <div className="app">
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/list' element={<ListPage books={books} />} />

        <Route path='/list/:bookId' element={<DetailPage books={books} />} />

        <Route path='/task1' element={<Box>
          <h2>Первый элемент, с детьми</h2>
        </Box>} />
        <Route path='/task2' element={<List items={arr} renderItem={renderItem} />} />
      </Routes>
      </div>
    </Router>
  );

};

export default App;
