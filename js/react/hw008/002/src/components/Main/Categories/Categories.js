import React from 'react'
import offer_for_women from '../../../assets/offer_for_women.svg'
import offer_for_men from '../../../assets/offer_for_men.svg'
import offer_for_kids from '../../../assets/offer_for_kids.svg'
import offer_accesories from '../../../assets/offer_accesories.svg'


export const Categories = () => {
  return (
  
    <div className="offer center">

      <div className="offer__top">

        <div className="offer__top-card" style={{backgroundImage: `url(${offer_for_women})`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">30$ OFF</p>
            <p className="offer__card-text">FOR WOMEN</p>
          </div>
        </div>

        <div className="offer__top-card" style={{backgroundImage: `url(${offer_for_men})`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">HOT DEAL</p>
            <p className="offer__card-text">FOR MEN</p>
          </div>
        </div>
        <div className="offer__top-card" style={{backgroundImage: `url(${offer_for_kids})`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">NEW ARRIVALS</p>
            <p className="offer__card-text">FOR KIDS</p>
          </div>
        </div>
      </div>

      <div className="offer__bottom">
        <div className="offer__bottom-card" style={{backgroundImage: `url(${offer_accesories})`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">LUXIROUS & TRENDY</p>
            <p className="offer__card-text">ACCESORIES</p>
          </div>
        </div>
      </div>
    </div>


  )
}

