import { SocialItem } from "@comps/UI_comps/SocialItem";
import React from "react";
import { Link } from "react-router-dom";
import fbLogo from '@assets/socials/Facebook.png';

export const Footer: React.FC = () => {
  return (
    <div className='footer_container'>
      <footer className='app-container footer'>
        <nav>
          <ul className='footer__menu'>
            <li><Link to={'#'} className="menu-link">Terms & Conditions</Link> </li>
            <li><Link to={'#'} className="menu-link">Cookies</Link></li>
            <li><Link to={'#'} className="menu-link">Contacts</Link></li>
            <li><Link to={'#'} className="menu-link">Careers</Link></li>
            <li><Link to={'#'} className="menu-link">Brand Guide</Link></li>
          </ul>
        </nav>
        <div className='footer__social social-media'>
          <h3 className="social-media__title">Our social media:</h3 >
          <div className='social-media__sites'>
            <SocialItem imgUrl={fbLogo} link="#"/>
          </div>
        </div>
      </footer>

    </div>
  )
}