import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slicers/cartSlice';

export const ProductCard = ({id, imgSrc, title, price, description}) => {

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <div className="products__card-imagebox">
        <div onClick={() => dispatch(addToCart(products.find(item => item.id === id)))} className="products__card-imagebox-bg">

            <div  className="products__card-imagebox-bg-buy">
              <img src='./img/header_cart.svg' alt="imagebox-bg-img" className="imagebox-bg-img" />
              <p className="products__imagebox-bg-text">Add to Cart</p>
            </div>

        </div>
        <img src={imgSrc} alt="product image" className="products_card_img" />
      </div>

      <div className="products__card-textbox">
        <Link to={`/products/${id}`} className="products__card-title">{title}</Link>
        <p className="products__card-description">{description}</p>
        <p className="products__card-price">$ {price}</p>
      </div>
    </>
  )
}
