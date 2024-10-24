import React from 'react'
import '../../styles/style.scss'
import header_logo from '../../assets/header_logo.svg'
import header_sandwich from '../../assets/header_sandwich.svg'
import header_account from '../../assets/header_account.svg'
import header_cart from '../../assets/header_cart.svg'
import header_search from '../../assets/header_search.svg'

export const Header = () => {
  return (
    
    <header className="header center">

      <div className="header__left">
        <a href="index.html"><img src={header_logo} alt="logo" className="header__left__logo" /></a>
        <a href="#"><img src={header_search} alt="search" className="header__left__search"/></a>
      </div>

      <div className="header__right">
        <label className="header__right__button" for="sandwich">
          <img src={header_sandwich} alt="header__right__img"/>
        </label>
        <input type="checkbox" id="sandwich" checked />

        <form action="./registration.html" className="header__right__form_hidden">
          <button className="header__right__button">
            <img src={header_account} alt="header__right__img" />
          </button>
        </form>

        <form action="./cart.html" className="header__right__form_hidden">
          <button className="header__right__button header__right__cart">
            <img src={header_cart} alt="header__right__img"/>
          </button>
        </form>

        <nav className="header__right__menu">
          <label for="sandwich">
            <svg className="header__right__menu__cross" width="12.011719" height="12.011719" viewBox="0 0 12.0117 12.0117"
              fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

              <path id="menuCrossThree"
                d="M7.41602 6.00391L11.7148 1.71484C11.9043 1.52734 12.0098 1.26953 12.0098 1.00391C12.0098 0.738281 11.9043 0.480469 11.7148 0.292969C11.5273 0.105469 11.2715 0 11.0059 0C10.7402 0 10.4844 0.105469 10.2949 0.292969L6.00586 4.59375L1.71484 0.292969C1.52734 0.105469 1.27148 0 1.00586 0C0.740234 0 0.484375 0.105469 0.294922 0.292969C0.107422 0.480469 0.00195312 0.738281 0.00195312 1.00391C0.00195312 1.26953 0.107422 1.52734 0.294922 1.71484L4.5957 6.00391L0.294922 10.293C0.201172 10.3867 0.126953 10.4961 0.0761719 10.6211C0.0253906 10.7422 0 10.8711 0 11.0039C0 11.1367 0.0253906 11.2656 0.0761719 11.3867C0.126953 11.5117 0.201172 11.6211 0.294922 11.7148C0.388672 11.8086 0.5 11.8828 0.621094 11.9336C0.742188 11.9844 0.873047 12.0117 1.00586 12.0117C1.13867 12.0117 1.26758 11.9844 1.39062 11.9336C1.51172 11.8828 1.62305 11.8086 1.71484 11.7148L6.00586 7.41406L10.2949 11.7148C10.3887 11.8086 10.5 11.8828 10.6211 11.9336C10.7422 11.9844 10.873 12.0117 11.0059 12.0117C11.1387 12.0117 11.2676 11.9844 11.3906 11.9336C11.5117 11.8828 11.623 11.8086 11.7148 11.7148C11.8086 11.6211 11.8848 11.5117 11.9355 11.3867C11.9863 11.2656 12.0117 11.1367 12.0117 11.0039C12.0117 10.8711 11.9863 10.7422 11.9355 10.6211C11.8848 10.4961 11.8086 10.3867 11.7148 10.293L7.41602 6.00391Z" />
            </svg>
          </label>


          <h3 className="header__right__menu__main">MENU

          </h3>
          <h3 className="header__right__menu__block">MAN</h3>
          <ul>
            <li><a href="#" className="header__right__menu__link">Accessories</a></li>
            <li><a href="#" className="header__right__menu__link">Bags</a></li>
            <li><a href="#" className="header__right__menu__link">Denim</a></li>
            <li><a href="#" className="header__right__menu__link">T-Shirts</a></li>
          </ul>
          <h3 className="header__right__menu__block">WOMEN</h3>
          <ul>
            <li><a href="#" className="header__right__menu__link">Accessories</a></li>
            <li><a href="#" className="header__right__menu__link">Jackets & Coats</a></li>
            <li><a href="#" className="header__right__menu__link">Polos</a></li>
            <li><a href="#" className="header__right__menu__link">T-Shirts</a></li>
            <li><a href="#" className="header__right__menu__link">Shirts</a></li>
          </ul>
          <h3 className="header__right__menu__block">KIDS</h3>
          <ul>
            <li><a href="#" className="header__right__menu__link">Accessories</a></li>
            <li><a href="#" className="header__right__menu__link">Jackets & Coats</a></li>
            <li><a href="#" className="header__right__menu__link">T-Shirts</a></li>
            <li><a href="#" className="header__right__menu__link">Shirts</a></li>
            <li><a href="#" className="header__right__menu__link">Bags</a></li>
          </ul>
        </nav>
      </div>
    </header>

  )
}
