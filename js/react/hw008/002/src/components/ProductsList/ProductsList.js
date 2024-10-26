import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'

const prodArr = []

for (let index = 0; index < 6; index++) {
  prodArr.push(<ProductCard />);

}

export const ProductsList = () => {
  return (

    <div class="products__box">

      {prodArr.map(item => item)}

    </div>

  )
}
