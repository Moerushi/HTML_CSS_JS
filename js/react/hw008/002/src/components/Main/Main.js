import React from 'react'
import { Logo } from './Logo/Logo'
import { Categories } from './Categories/Categories'
import { Features } from './Features/Features'
import { ProductsList } from '../ProductsList/ProductsList'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <>
      <Logo />
      <Categories />
      <div className='products center'>
        <div className="products__title">
          <h2 className="products__title__h2">Featured Items</h2>
          <p className="products__title__text">Shop for items based on what we featured in this week</p>
        </div>
        <ProductsList />

        <Link to="/catalogue">
          <div class="products__button">Browse All Product</div>
        </Link>
      </div>
      <Features />
    </>

  )
}
