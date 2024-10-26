import React from 'react'
import header_cart from '../../assets/header_cart.svg'
import products_one from '../../assets/products_one.svg'
import { Link } from 'react-router-dom'

export const ProductCard = () => {
  return (
    <div className="products__card">
      <div className="products__card-imagebox">
        <div className="products__card-imagebox-bg">
          <a href="#">
            <div className="products__card-imagebox-bg-buy">
              <img src={header_cart} alt="imagebox-bg-img" className="imagebox-bg-img" />
              <p className="products__imagebox-bg-text">Add to Cart</p>
            </div>
          </a>
        </div>
        <img src={products_one} alt="product image" className="products_card_img" />
      </div>

      <div className="products__card-textbox">
        <Link to="/products/product" className="products__card-title">ELLERY X M'O CAPSULE</Link>
        <p className="products__card-description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p className="products__card-price">$ 52.00</p>
      </div>
    </div>
  )
}
