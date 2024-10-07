import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { ArticleDetails } from './components/ArticleDetails';
import { ArticlesList } from './components/ArticlesList';
import { BorderComp } from './components/BorderComp';
import { Card } from './components/Card';
import { DivWithChild } from './components/DivWithChild';
import { MouseInfo } from './components/MouseInfo';
import { MouseTracker } from './components/MouseTracker';
import { ProductsList } from './components/ProductsList';
import { ProductDetailes } from './components/ProductDetailes';

// const articles = [
//   { id: 1, title: 'Article 1', content: 'Content 1' },
//   { id: 2, title: 'Article 2', content: 'Content 2' },
//   { id: 3, title: 'Article 3', content: 'Content 3' },
//   { id: 4, title: 'Article 4', content: 'Content 4' },
//   { id: 5, title: 'Article 5', content: 'Content 5' },
// ];

const products = [
{id: 1, name: 'Product 1', description: 'product 1 description', price: 100},
{id: 2, name: 'Product 2', description: 'product 2 description', price: 200},
{id: 3, name: 'Product 3', description: 'product 3 description', price: 300},
{id: 4, name: 'Product 4', description: 'product 4 description', price: 400},
{id: 5, name: 'Product 5', description: 'product 5 description', price: 500},
{id: 6, name: 'Product 6', description: 'product 6 description', price: 600},
{id: 7, name: 'Product 7', description: 'product 7 description', price: 700},
{id: 8, name: 'Product 8', description: 'product 8 description', price: 800},
{id: 9, name: 'Product 9', description: 'product 9 description', price: 900},
];

function App() {
  return (
    // <div className='App'>
    //   <div>
    //     {console.log(
    //       <DivWithChild>
    //         <p>New text</p>
    //         <div>DIV element</div>
    //       </DivWithChild>
    //     )}
    //   </div>
    //   <div>
    //     <BorderComp>
    //       <p>This paragraph is in border.</p>
    //       <button>Button inside border.</button>
    //     </BorderComp>
    //     <p>This paragraph is outside border.</p>
    //     <BorderComp>
    //       <h3>New heading</h3>
    //     </BorderComp>

    //   </div>
    //   <div>
    //     <Card title='Card 1'>
    //       <p>Content of first card</p>
    //       <button>Action</button>
    //     </Card>
    //     <Card title='Card 2'>
    //       <p>Content of second card</p>
    //       <a href='#'>Reference</a>
    //     </Card>
    //   </div>
    //   <div>
    //     <h1>Props example</h1>
    //     <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
    //   </div>
    // </div>
    // <Router>
    //   <div>
    //     <h1>App for articles view</h1>
    //     <Routes>
    //     <Route path='/articles/:id' element={<ArticleDetails articles={articles} />} />
    //     <Route path='*' element={<ArticlesList articles={articles} />} />
    //     </Routes>
    //   </div>
    // </Router>
        <Router>
        <div>
          <h1>App for products view</h1>
          <Routes>
          <Route path='/page/:pageNumber' element={<ProductsList products={products} />} />
          <Route path='/product/:productId' element={<ProductDetailes products={products} />} />
          <Route path='/*' element={<ProductsList products={products} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
