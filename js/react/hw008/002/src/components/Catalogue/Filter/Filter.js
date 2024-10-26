import React from 'react'
import { ProdFilter } from './ProdFilter/ProdFilter'
import { Sorting } from './Sorting/Sorting'

export const Filter = () => {
  return (
    <div class="filter-sort center">
      <ProdFilter />
      <Sorting />
    </div>
  )
}
