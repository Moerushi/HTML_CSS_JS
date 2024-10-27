import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux';

export const ProductsList = () => {

  const { products } = useSelector((state) => state.products);

  return (

    <div className="products__box">

      {products.map((item, index) => <div key={index} className="products__card">{<ProductCard {...item}/>}</div>)}

    </div>

  )
}
