import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Subscription } from './components/Subscription/Subscription';
import { Main } from './components/Main/Main';
import { Registration } from './components/Registration/Registration';
import { Cart } from './components/Cart/Cart';
import { Catalogue } from './components/Catalogue/Catalogue';
import { ProdPage } from './components/ProdPage/ProdPage';
import ScrollToTop from './services/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from './redux/slicers/productsSlice'
import { useEffect } from 'react'


function App() {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} /> {/* main */}
        <Route path='/registration' element={<Registration />} /> {/* registration */}
        <Route path='/cart' element={<Cart />} /> {/* product card */}
        <Route path='/catalogue' element={<Catalogue />} /> {/* catalogue */}
        <Route path='/products/:prodId' element={<ProdPage products={products}/>} /> {/* product card */}
      </Routes>
      <Subscription />
      <Footer />
    </Router>
  );
}

export default App;
