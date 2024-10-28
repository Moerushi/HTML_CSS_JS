import React from 'react'
import { PageTitle } from '../PageTitle/PageTitle'
import { Carousel } from './Carousel/Carousel'
import { ProductsList } from '../ProductsList/ProductsList'
import { UniqueProdCard } from './UniqueProdCard/UniqueProdCard'
import { useParams } from 'react-router-dom'

export const ProdPage = ({products}) => {
  const { prodId } = useParams();

  const thisProd = products.find(product => product.id === parseInt(prodId, 10));

  return (
    <>
      <PageTitle name='NEW ARRIVALS' />
      <Carousel imgSrc={thisProd.imgSrc}/>
      <UniqueProdCard {...thisProd} />
      <div className="other-products center">
        <ProductsList />
      </div>
    </>
  )
}