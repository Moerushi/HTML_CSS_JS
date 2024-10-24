import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Subscription } from './components/Subscription/Subscription';
import { Main } from './components/Main/Main';
import { Registration } from './components/Registration/Registration';
import { Cart } from './components/Cart/Cart';
import { Catalogue } from './components/Catalogue/Catalogue';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/> {/* main */}
        <Route path='/registration' element={<Registration />}/> {/* registration */}
        <Route path='/cart' element={<Cart />} /> {/* product card */}
        <Route path='/catalogue' element={<Catalogue/>} /> {/* catalogue */}
        <Route path='/products/:productId' element={<Outlet />} /> {/* product card */}
      </Routes>
      <Subscription />
      <Footer />
    </Router>
  );
}

export default App;
