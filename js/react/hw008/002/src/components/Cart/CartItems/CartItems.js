import React from 'react'
import { CartItem } from '../CartItem/CartItem';

const cartArr = []

for (let index = 0; index < 2; index++) {
  cartArr.push(<CartItem />);

}

export const CartItems = () => {
  return (
    <div class="shopping-cart__left">

      {cartArr.map(item => item)}

      <div class="shopping-cart__left__buttoms">
        <form action="./catalog.html">
          <button class="shopping-cart__left__buttom">CLEAR SHOPPING CART</button>
        </form>
        <form action="./catalog.html">
          <button class="shopping-cart__left__buttom">CONTINUE SHOPPING</button>
        </form>

      </div>

    </div>
  )
}
