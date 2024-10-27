import React from 'react'

export const Categories = () => {
  return (
  
    <div className="offer center">

      <div className="offer__top">

        <div className="offer__top-card" style={{backgroundImage: `url(./img/offer_for_women.svg)`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">30$ OFF</p>
            <p className="offer__card-text">FOR WOMEN</p>
          </div>
        </div>

        <div className="offer__top-card" style={{backgroundImage: `url(./img/offer_for_men.svg)`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">HOT DEAL</p>
            <p className="offer__card-text">FOR MEN</p>
          </div>
        </div>
        <div className="offer__top-card" style={{backgroundImage: `url(./img/offer_for_kids.svg)`}}>
          <div className="offer__filter"></div>
          <div className="offer__card-textbox">
            <p className="offer__card-text">NEW ARRIVALS</p>
            <p className="offer__card-text">FOR KIDS</p>
          </div>
        </div>
      </div>

      <div className="offer__bottom">
        <div className="offer__bottom-card" style={{backgroundImage: `url(./img/offer_accesories.svg)`}}>
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

