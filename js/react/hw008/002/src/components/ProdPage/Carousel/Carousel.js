import React from 'react'

export const Carousel = () => {
  return (
    <div className="carousel center">

    <div className="carousel__item">
      <img src='./img/brand_box_image.svg' alt="carousel_img" />
    </div>

    <div className="carousel__buttons-box">
      <button className="carousel__button" type="button">
        <svg className="carousel__prevbutton" fill="currentColor" width="12.399902" height="21.699951"
          viewBox="0 0 12.3999 21.7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="prev"
            d="M12.3999 3.1001L4.6499 10.8501L12.3999 18.6001L10.8501 21.7L0 10.8501L10.8501 0L12.3999 3.1001Z" />
        </svg>
      </button>

      <button className="carousel__button" type="button">
        <svg className="carousel__nextbutton" fill="currentColor" width="12.399902" height="21.699951"
          viewBox="0 0 12.3999 21.7" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="next"
            d="M12.3999 3.1001L4.6499 10.8501L12.3999 18.6001L10.8501 21.7L0 10.8501L10.8501 0L12.3999 3.1001Z" />
        </svg>
      </button>
    </div>
  </div>
  )
}
