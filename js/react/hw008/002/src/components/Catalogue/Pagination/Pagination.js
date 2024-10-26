import React from 'react'
import { Link } from 'react-router-dom'
import buttom_prev from '../../../assets/buttom_prev.svg'

export const Pagination = () => {
  return (
    <div class="pages">
    <div class="pages__box">
      <img class="pages__box__img__prev" src={buttom_prev} alt="buttom" />
      <div class="pages__link__box">
        <Link to="#" class="pages__link">1</Link>
        <Link to="#" class="pages__link">2</Link>
        <Link to="#" class="pages__link">3</Link>
        <Link to="#" class="pages__link">4</Link>
        <Link to="#" class="pages__link">5</Link>
        <Link to="#" class="pages__link">6</Link>
        <span>.....</span>
        <a href="#" class="pages__link">20</a>
      </div>
      <img class="pages__box__img__next" src={buttom_prev} alt="buttom" />
    </div>
  </div>
  )
}
