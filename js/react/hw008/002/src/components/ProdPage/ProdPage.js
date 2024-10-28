import React from 'react'
import { PageTitle } from '../PageTitle/PageTitle'
import { Carousel } from './Carousel/Carousel'
import { ProductsList } from '../ProductsList/ProductsList'
import { UniqueProdCard } from './UniqueProdCard/UniqueProdCard'
import { useParams } from 'react-router-dom'

export const ProdPage = ({products}) => {
  const { prodId } = useParams();

  return (
    <div>
      <PageTitle name='NEW ARRIVALS' />
      <Carousel />
      <UniqueProdCard {...products.find(product => product.id === parseInt(prodId, 10))} />
      <div className="other-products center">
        <ProductsList />
      </div>
    </div>
  )
}
