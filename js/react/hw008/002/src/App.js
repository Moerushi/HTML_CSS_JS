import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Subscription } from './components/Subscription/Subscription';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Outlet />}/> {/* main */}
        <Route path='/registration' element={<Outlet />}/> {/* registration */}
        <Route path='/cart' element={<Outlet />} /> {/* product card */}
        <Route path='/catalogue' element={<Outlet />} /> {/* catalogue */}
        <Route path='/product/:productId' element={<Outlet />} /> {/* product card */}
      </Routes>
      <Subscription />
      <Footer />
    </Router>
  );
}

export default App;
