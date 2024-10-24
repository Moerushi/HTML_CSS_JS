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
        <a href="/"><img src={header_logo} alt="logo" className="header__left__logo" /></a>
        <a href="#"><img src={header_search} alt="search" className="header__left__search"/></a>
      </div>

      <div className="header__right">
        <label className="header__right__button" for="sandwich">
          <img src={header_sandwich} alt="header__right__img"/>
        </label>
        <input type="checkbox" id="sandwich" checked />

        <form action="/registration" className="header__right__form_hidden">
          <button className="header__right__button">
            <img src={header_account} alt="header__right__img" />
          </button>
        </form>

        <a href='/cart' className="header__right__form_hidden">
          <button className="header__right__button header__right__cart">
            <img src={header_cart} alt="header__right__img"/>
          </button>
        </a>
      </div>
    </header>

  )
}