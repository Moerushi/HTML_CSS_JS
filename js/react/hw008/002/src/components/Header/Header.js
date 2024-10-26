import React from 'react'
import '../../styles/style.scss'
import header_logo from '../../assets/header_logo.svg'
import header_sandwich from '../../assets/header_sandwich.svg'
import header_account from '../../assets/header_account.svg'
import header_cart from '../../assets/header_cart.svg'
import header_search from '../../assets/header_search.svg'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu/Menu'


export const Header = () => {
  return (
    
    <header className="header center">

      <div className="header__left">
        <Link to="/"><img src={header_logo} alt="logo" className="header__left__logo" /></Link>
        <Link to="/"><img src={header_search} alt="search" className="header__left__search"/></Link>
      </div>

      <div className="header__right">
        <label className="header__right__button" for="sandwich">
          <img src={header_sandwich} alt="header__right__img"/>
        </label>
        <input type="checkbox" id="sandwich" checked />

        <Link to="/registration" className="header__right__form_hidden">
          <button className="header__right__button">
            <img src={header_account} alt="header__right__img" />
          </button>
        </Link>

        <Link to='/cart' className="header__right__form_hidden">
          <button className="header__right__button header__right__cart">
            <img src={header_cart} alt="header__right__img"/>
          </button>
        </Link>
        <Menu />
      </div>
    </header>

  )
}