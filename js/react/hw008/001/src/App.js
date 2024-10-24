import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandFooter from './components/BrandFooter';
import Subscribe from './components/Subscribe';
import Checkout from './components/Checkout/Checkout';
import Single from './components/Single/Single';
import Products from './components/Products/Products';
import Basket from './components/Basket/Basket';
import Main from './components/Main/Main';


function App() {
  
  return (
    <div className="app">
      <Router>
       <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/single' element={<Single />} />
          <Route path='/basket' element={<Basket/>} />
          <Route path='/product' element={<Products  />} />
        </Routes>
        <Subscribe />
        <BrandFooter />
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
