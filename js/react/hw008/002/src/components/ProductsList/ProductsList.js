import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux';

export const ProductsList = ({ list = [] }) => {

  return (
    <div className="products__box">
      {list.length === 0 ? <div className='shopping-cart__right__heading'>Nothing was found. Change filters!</div> : list.map((item, index) => <div key={index} className="products__card">{<ProductCard {...item} />}</div>)}
    </div>
  )
}