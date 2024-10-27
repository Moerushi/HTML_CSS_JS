import React from 'react'

export const Sorting = () => {
  return (
    <div className="sort">

    <details className="sort__details">
      <summary className="sort__summary">
        <span className="sort__heading">TRENDING NOW</span>
      </summary>
    </details>

    <details className="sort__details">
      <summary className="sort__summary">
        <span className="sort__heading">SIZE</span>
      </summary>

      <div className="sort__box">

        <label className="sort__check" htmlFor="xs-size">
          <input className="sort__check__checkbox" type="checkbox" id="xs-size" />
          XS</label>

        <label className="sort__check" htmlFor="s-size">
          <input className="sort__check__checkbox" type="checkbox" id="s-size" />
          S</label>

        <label className="sort__check" htmlFor="m-size">
          <input className="sort__check__checkbox" type="checkbox" id="m-size" />
          M</label>

        <label className="sort__check" htmlFor="l-size">
          <input className="sort__check__checkbox" type="checkbox" id="l-size" />
          L</label>

      </div>

    </details>

    <details className="sort__details">
      <summary className="sort__summary">
        <span className="sort__heading">PRICE</span>
      </summary>
    </details>
  </div>
  )
}
