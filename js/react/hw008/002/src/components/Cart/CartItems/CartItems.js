import React from 'react'
import { CartItem } from '../CartItem/CartItem';
import { useSelector } from 'react-redux';

export const CartItems = () => {

  const { itemsInCart } = useSelector((state) => state.cart);

  return (
    <div className="shopping-cart__left">

      {itemsInCart.length ? itemsInCart.map((item, index) => <div key={index} className="shopping-cart__left__cards"><CartItem {...item} /></div>) : 'Your cart is empty!'}

      <div className="shopping-cart__left__buttoms">
        <form action="./catalog.html">
          <button className="shopping-cart__left__buttom">CLEAR SHOPPING CART</button>
        </form>
        <form action="./catalog.html">
          <button className="shopping-cart__left__buttom">CONTINUE SHOPPING</button>
        </form>

      </div>

    </div>
  )
}
