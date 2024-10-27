import React from 'react'
import { Link } from 'react-router-dom'

export const Pagination = () => {
  return (
    <div className="pages">
    <div className="pages__box">
      <img className="pages__box__img__prev" src='./img/buttom_prev.svg' alt="buttom" />
      <div className="pages__link__box">
        <Link to="#" className="pages__link">1</Link>
        <Link to="#" className="pages__link">2</Link>
        <Link to="#" className="pages__link">3</Link>
        <Link to="#" className="pages__link">4</Link>
        <Link to="#" className="pages__link">5</Link>
        <Link to="#" className="pages__link">6</Link>
        <span>.....</span>
        <a href="#" className="pages__link">20</a>
      </div>
      <img className="pages__box__img__next" src='./img/buttom_prev.svg' alt="buttom" />
    </div>
  </div>
  )
}
