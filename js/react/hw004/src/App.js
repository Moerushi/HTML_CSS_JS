import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

const routes = [
  {
    name: 'Главная',
    path: '/',
    component: <HomePage />
  },
  {
    name: 'О нас',
    path: '/about',
    component: <AboutPage />
  }
]

function App() {
  return (
    <Router>
      <nav>
      {routes.map((route, index) => (
          <NavLink className='link' key={index} to={route.path}>{route.name}</NavLink>
        ))}
      </nav>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
