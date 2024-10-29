import React from 'react'
import { PageTitle } from '../PageTitle/PageTitle'
import { ProductsList } from '../ProductsList/ProductsList'
import { Filter } from './Filter/Filter'
import { Pagination } from './Pagination/Pagination'
import { useSelector } from 'react-redux';

export const Catalogue = () => {

  const { products } = useSelector((state) => state.products);
  const { itemsInFilter } = useSelector((state) => state.filter);

  const filteredProducts = products.filter((product) =>
    itemsInFilter.length === 0 || product.sizes.some((size) => itemsInFilter.includes(size))
  );

  console.log(filteredProducts);
  console.log(itemsInFilter);
  
  return (
    <>
      <PageTitle name='NEW ARRIVALS' />
      <Filter />
      <div className="products center">
        <ProductsList list={filteredProducts}/>
      </div>
      <Pagination />
    </>

  )
}


