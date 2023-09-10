import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import imgUrl from '../../assets/Icon-Planet.png'

export const Header: React.FC = () => {
  return (
        <header className={styles.header}>
          <div className={styles.header__item}/>
          <nav>
            <ul className={styles.menu}>
              <li className={styles.menu__item}><Link to={'/about'}>About us</Link></li>
              <li className={styles.menu__item}><Link to={'#'}>Brands</Link></li>
              <li className={styles.menu__item}><Link to={'#'}>Commissions</Link></li>
              <li className={styles.menu__item}><Link to={'#'}>News</Link></li>
              <li className={styles.menu__item}><Link to={'#'}>Contact us</Link></li>
              <li className={styles.menu__item}><Link to={'#'}>Careers</Link></li>

            </ul>
          </nav>
          <div className={styles.header__auth}>
            <button className="menu-btn outlined withPic">
              <img src={imgUrl}></img>
              <span>en</span>
              </button>
            <button className="menu-btn outlined">log in</button>
            <button className="menu-btn filled-item">sign up</button>
          </div>
        </header>
  )
}