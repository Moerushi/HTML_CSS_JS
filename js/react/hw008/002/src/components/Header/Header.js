import React from 'react'
import '../../styles/style.scss'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import {useState} from 'react'
import { useSelector } from 'react-redux';

export const Header = () => {

  const {itemsInCart} = useSelector((state) => state.cart);

  const [checked, setChecked] = useState(true);

  const handlerChange = () => {
    if (checked) {
      setChecked(false);
      return;
    }
    setChecked(true);
  }

  return (
    
    <header className="header center">

      <div className="header__left">
        <Link to="/"><img src='./img/header_logo.svg' alt="logo" className="header__left__logo" /></Link>
        <Link to="/"><img src='./img/header_search.svg' alt="search" className="header__left__search"/></Link>
      </div>

      <div className="header__right">
        <label className="header__right__button" htmlFor="sandwich">
          <img src='./img/header_sandwich.svg' alt="header__right__img"/>
        </label>
        <input type="checkbox" id="sandwich" onChange={handlerChange} checked={checked} />

        <Link to="/registration" className="header__right__form_hidden">
          <button className="header__right__button">
            <img src='./img/header_account.svg' alt="header__right__img" />
          </button>
        </Link>

        <Link to='/cart' className="header__right__form_hidden">
          <button className="header__right__button header__right__cart">
            <img src='./img/header_cart.svg' alt="header__right__img"/>
            <p className='header__right__cart__label'>{itemsInCart.length}</p>
          </button>
        </Link>
        <Menu />
      </div>
    </header>

  )
}