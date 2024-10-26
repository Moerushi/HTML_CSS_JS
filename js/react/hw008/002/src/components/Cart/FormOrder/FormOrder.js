import React from 'react'

export const FormOrder = () => {
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
        <p className="shopping-cart__right__sub-total">SUB TOTAL</p>
        <p className="shopping-cart__right__grand-total">GRAND TOTAL</p>
        <div className="shopping-cart__right__line"></div>
        <button type="submit" className="shopping-cart__right__buttom">PROCEED TO CHECKOUT</button>
      </div>

  </div>
  )
}
