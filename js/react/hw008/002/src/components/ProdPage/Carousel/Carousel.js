import React from 'react'
import carousel_img from '../../../assets/carousel_img.svg'

export const Carousel = () => {
  return (
    <div class="carousel center">

    <div class="carousel__item">
      <img src={carousel_img} alt="carousel_img" />
    </div>

    <div class="carousel__buttons-box">
      <button class="carousel__button" type="button">
        <svg class="carousel__prevbutton" fill="currentColor" width="12.399902" height="21.699951"
          viewBox="0 0 12.3999 21.7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="prev"
            d="M12.3999 3.1001L4.6499 10.8501L12.3999 18.6001L10.8501 21.7L0 10.8501L10.8501 0L12.3999 3.1001Z" />
        </svg>
      </button>

      <button class="carousel__button" type="button">
        <svg class="carousel__nextbutton" fill="currentColor" width="12.399902" height="21.699951"
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
