import React from 'react'
import { useSelector } from 'react-redux';

export const FormOrder = () => {

  const { total } = useSelector((state) => state.cart);

  return (
    <div className="shopping-cart__right">

      <form className="shopping-cart__right__shipping-address">
        <h2 className="shopping-cart__right__heading">SHIPPING ADDRESS</h2>
        <input type="text" className="input" placeholder="Bangladesh" />
        <input type="text" className="input" placeholder="State" />
        <input type="text" className="input" placeholder="Postcode / Zip" />
        <button className="shopping-cart__right__top-button">GET A QUOTE</button>
      </form>

      <div className="shopping-cart__right__total">
        <p className="shopping-cart__right__sub-total">SUB TOTAL<span className='shopping-cart__right__sub-total__label'>${total}</span></p>
        <p className="shopping-cart__right__grand-total">GRAND TOTAL<span className="shopping-cart__right__grand-total__label">${total}</span></p>
        <div className="shopping-cart__right__line"></div>
        <button type="submit" className="shopping-cart__right__buttom">PROCEED TO CHECKOUT</button>
      </div>

    </div>
  )
}
