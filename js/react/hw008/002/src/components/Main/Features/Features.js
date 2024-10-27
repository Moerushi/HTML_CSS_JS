import React from 'react'

export const Features = () => {
  return (

    <div className="feature center">
      <div className="feature__items">
        <div className="feature__item">
          <img src='./img/feature_car.svg' alt="feature__item-img" className="feature__item-img" />
          <div className="feature__text-block">
            <h3 className="feature__item-heading">Free Delivery</h3>
            <p className="feature__item-description">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div className="feature__item">
          <img src='./img/feature_coin.svg' alt="feature__item-img" className="feature__item-img" />
          <div className="feature__text-block">
            <h3 className="feature__item-heading">Sales & discounts</h3>
            <p className="feature__item-description">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div className="feature__item">
          <img src='./img/feature_crown.svg' alt="feature__item-img" className="feature__item-img" />
          <div className="feature__text-block">
            <h3 className="feature__item-heading">Quality assurance</h3>
            <p className="feature__item-description">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
          </div>

        </div>
      </div>
    </div>


  )
}
