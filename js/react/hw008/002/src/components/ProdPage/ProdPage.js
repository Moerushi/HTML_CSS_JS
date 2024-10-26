import React from 'react'
import { PageTitle } from '../PageTitle/PageTitle'
import { Carousel } from './Carousel/Carousel'
import { ProductsList } from '../ProductsList/ProductsList'
import { UniqueProdCard } from './UniqueProdCard/UniqueProdCard'

export const ProdPage = () => {
  return (
    <>
    <PageTitle name='NEW ARRIVALS' />
    <Carousel />
    <UniqueProdCard />
    <div class="other-products center">
        <ProductsList />
    </div>
    </>
  )
}
