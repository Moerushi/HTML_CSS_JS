import React from 'react'
import { CartItem } from '../CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/slicers/cartSlice';
import { Link } from 'react-router-dom'

export const CartItems = () => {

  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.cart);

  return (
    <div className="shopping-cart__left">

      {itemsInCart.length ? itemsInCart.map((item, index) => <div key={index} className="shopping-cart__left__cards"><CartItem {...item} /></div>) : <div className="shopping-cart__right__heading">Your cart is empty! Add something!</div>}

      <div className="shopping-cart__left__buttoms">
          <button onClick={() => dispatch(clearCart())} className="shopping-cart__left__buttom">CLEAR SHOPPING CART</button>
          <Link to='/catalogue' className="shopping-cart__left__buttom">CONTINUE SHOPPING</Link>
      </div>

    </div>
  )
}
