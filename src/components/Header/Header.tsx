import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss';

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
          <div className="header__auth auth">
            <button className="auth__btn filled-item">log in</button>
            <button className="auth__btn"></button>
            <button className="auth__btn"></button>
          </div>
        </header>
  )
}