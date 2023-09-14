import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgUrl from '../../assets/Icon-Planet.png'

export const Header: React.FC = () => {
  const [english, setEnglish] = useState(true);
  return (
        <header className="header">
          <div className="header__item"/>
          <nav>
            <ul className="menu">
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
              <img src={imgUrl}></img>
              <span>{english ? 'en' : 'ru'}</span>
              </button>
            <button className="menu-btn outlined">log in</button>
            <button className="menu-btn filled-item">sign up</button>
          </div>
        </header>
  )
}