import React from 'react'
import { CartItems } from './CartItems/CartItems'
import { FormOrder } from './FormOrder/FormOrder'
import { PageTitle } from '../PageTitle/PageTitle'

export const Cart = () => {
  return (
    <>
    <PageTitle name='SHOPPING CART'/>
    <div class="shopping-cart__content center">
    <CartItems />
    <FormOrder />
    </div>
    </>
  )
}
