import React from 'react'
import { PageTitle } from '../PageTitle/PageTitle'
import { ProductsList } from '../ProductsList/ProductsList'
import { Filter } from './Filter/Filter'
import { Pagination } from './Pagination/Pagination'

export const Catalogue = () => {
  return (
    <>
      <PageTitle name='NEW ARRIVALS' />
      <Filter />
      <div class="products center">
        <ProductsList />
      </div>
      <Pagination />
    </>

  )
}
