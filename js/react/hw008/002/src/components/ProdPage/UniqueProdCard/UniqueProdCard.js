import React from 'react'

export const UniqueProdCard = () => {
  return (
    <div className="product-description__box center">
    <div className="product-description">
      <h2 className="product-description__title">WOMEN COLLECTION</h2>
      <div className="product-description__topline"></div>
      <h2 className="product-description__product-name">MOSCHINO CHEAP AND CHIC</h2>
      <p className="product-description__product-text">Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
        visualize parallel core competencies rather than exceptional portals.</p>
      <p className="product-description__product-price">$561</p>
      <div className="product-description__bottomline"></div>
      <div className="product-description__product-options">

        <details className="product-description__product-options__item">
          <summary className="product-description__product-options__summary">CHOOSE COLOR</summary>
          <div className="product-description__product-options__choise">
            <label className="product-description__product-options__label" htmlFor="black">
              <input className="option-input" type="radio" name="color" value="black"
                id="black"/>
              BLACK
            </label>
            <label htmlFor="grey" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="color" value="grey"
                id="grey"/>
              GREY
            </label>
            <label htmlFor="blue" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="color" value="blue"
                id="blue"/>
              BLUE
            </label>
            <label htmlFor="white" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="color" value="white"
                id="white"/>
              WHITE
            </label>
          </div>
        </details>

        <details className="product-description__product-options__item">
          <summary className="product-description__product-options__summary">CHOOSE SIZE</summary>

          <div className="product-description__product-options__choise">
            <label className="product-description__product-options__label" htmlFor="xs-size">
              <input className="option-input" type="radio" name="size" value="xs-size"
                id="xs-size"/>
              XS
            </label>
            <label htmlFor="s-size" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="size" value="s-size"
                id="s-size"/>
              S
            </label>
            <label htmlFor="m-size" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="size" value="m-size"
                id="m-size"/>
              M
            </label>
            <label htmlFor="l-size" className="product-description__product-options__label">
              <input className="option-input" type="radio" name="size" value="l-size"
                id="l-size"/>
              L
            </label>
          </div>
        </details>

        <details className="product-description__product-options__item">
          <summary className="product-description__product-options__summary">QUANTITY</summary>

          <div className="product-description__product-options__choise">
            <label className="product-description__product-options__label" htmlFor="quantity">
              <input className="product-description__product-options__quantity" type="number" name="quantity" step="1"
                value="1" min="1" max="10" id="quantity"/>
            </label>
          </div>
        </details>

      </div>
      <a href="#">
        <div className="product-description__addtocart">

          <svg width="31.995575" height="29.000000" viewBox="0 0 31.9956 29" fill="rgb(239, 91, 112)"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="forma"
              d="M26.2009 29C25.5532 28.9739 24.9415 28.6948 24.4972 28.2227C24.0529 27.7505 23.8114 27.123 23.8245 26.4751C23.8376 25.8269 24.1042 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.0481 26.301 24.0481C26.9493 24.0481 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.4751C28.7906 27.123 28.549 27.7505 28.1047 28.2227C27.6604 28.6948 27.0488 28.9739 26.401 29L26.2009 29ZM6.75293 26.3201C6.75293 25.79 6.9101 25.2717 7.20459 24.8311C7.49908 24.3904 7.91763 24.0469 8.40735 23.844C8.89706 23.6411 9.43594 23.5881 9.95581 23.6914C10.4757 23.7949 10.9532 24.05 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7971C12.1649 26.3171 12.1118 26.856 11.9089 27.3457C11.7061 27.8352 11.3626 28.2539 10.9219 28.5483C10.4811 28.8428 9.96304 29 9.43298 29C9.08087 29.0002 8.73212 28.9312 8.40674 28.7966C8.08136 28.6621 7.78571 28.4646 7.53662 28.2158C7.28754 27.9668 7.09 27.6714 6.9552 27.3459C6.8204 27.0208 6.75098 26.6721 6.75098 26.3201L6.75293 26.3201ZM10.553 20.686C10.2935 20.6868 10.041 20.6023 9.83411 20.4458C9.62726 20.2891 9.47757 20.0688 9.40796 19.8191L4.57495 2.36401L1.18201 2.36401C0.86853 2.36401 0.567871 2.2395 0.346191 2.01782C0.124512 1.79614 0 1.49561 0 1.18188C0 0.868408 0.124512 0.567871 0.346191 0.346191C0.567871 0.124512 0.86853 0 1.18201 0L5.46301 0C5.7225 -0.000732422 5.97504 0.0837402 6.18176 0.240479C6.38849 0.397461 6.53784 0.61792 6.60693 0.86792L11.4399 18.323L24.6179 18.323L29.001 8.2749L14.401 8.2749C14.2428 8.27954 14.0854 8.25244 13.9379 8.19507C13.7904 8.1377 13.6559 8.05127 13.5424 7.94116C13.4288 7.83081 13.3386 7.69897 13.277 7.55322C13.2154 7.40747 13.1836 7.25073 13.1836 7.09253C13.1836 6.93433 13.2154 6.77759 13.277 6.63184C13.3386 6.48608 13.4288 6.35425 13.5424 6.2439C13.6559 6.13354 13.7904 6.04736 13.9379 5.98999C14.0854 5.93262 14.2428 5.90552 14.401 5.90991L30.814 5.90991C31.0096 5.90991 31.2022 5.95874 31.3744 6.05176C31.5465 6.14478 31.6928 6.2793 31.7999 6.44312C31.9078 6.60718 31.9734 6.79565 31.9908 6.99146C32.0083 7.18726 31.9771 7.38428 31.9 7.56494L26.495 19.9771C26.4026 20.1877 26.2509 20.3669 26.0585 20.4927C25.866 20.6187 25.641 20.6858 25.411 20.686L10.553 20.686Z" />
          </svg>
          <p className="product-description__addtocart__text">Add To Cart</p>

        </div>
      </a>
    </div>
  </div>
  )
}
