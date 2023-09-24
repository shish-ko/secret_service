import { BurgerIcon } from "@comps/UI_comps/BurgerIcon";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgUrl from '../../assets/Icon-Planet.svg'

export const Header: React.FC = () => {
  const [english, setEnglish] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => setIsMenuOpen(!isMenuOpen);

  return (
        <header className="header">
          <div className="header__item"/>
          <BurgerIcon menuHandler={menuHandler} className='header__left-burger'/>
          <nav className={`menu ${isMenuOpen && 'menu_open'}`}>
            <ul className="menu__list">
              <li className="menu__item menu-link"><Link to={'/about'}>About us</Link></li>
              <li className="menu__item menu-link"><Link to={'#'}>Brands</Link></li>
              <li className="menu__item menu-link"><Link to={'#'}>Commissions</Link></li>
              <li className="menu__item menu-link"><Link to={'#'}>News</Link></li>
              <li className="menu__item menu-link"><Link to={'#'}>Contact us</Link></li>
              <li className="menu__item menu-link"><Link to={'#'}>Careers</Link></li>
            </ul>
          </nav>
          <div className="header__auth">
            <button className="menu-btn outlined withPic" onClick={() => setEnglish(!english)}>
              <img src={imgUrl} alt='current language' className="header__lang-pic"></img>
              <span className="header__current-lang">{english ? 'en' : 'ru'}</span>
              </button>
            <button className="menu-btn outlined header__logIn">log in</button>
            <button className="menu-btn filled-item header__signUp">sign up</button>
            <BurgerIcon menuHandler={menuHandler} className='header__right-burger'/>
          </div>
        </header>
  )
}