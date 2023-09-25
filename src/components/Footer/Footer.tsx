import { SocialItem } from "@comps/UI_comps/SocialItem";
import React from "react";
import { Link } from "react-router-dom";
import fbLogo from '@assets/socials/Facebook.png';
import ytLogo from '@assets/socials/YouTube.png';
import instLogo from '@assets/socials/Instagram.png';
import liLogo from '@assets/socials/LinkedIn.png';
import tgLogo from '@assets/socials/Telegram.png';
import ttLogo from '@assets/socials/TikTok.png';
import twLogo from '@assets/socials/Twitter.png';
import vkLogo from '@assets/socials/VK.png';

export const Footer: React.FC = () => {
  return (
    <div className='footer_container'>
      <footer className='footer app__container'>
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
            <SocialItem imgUrl={twLogo} link="#" alt="twitter logo"/>
            <SocialItem imgUrl={fbLogo} link="#" alt="facebook logo"/>
            <SocialItem imgUrl={instLogo} link="#" alt="inst logo"/>
            <SocialItem imgUrl={liLogo} link="#" alt="linkedIn logo"/>
            <SocialItem imgUrl={ytLogo} link="#" alt="youTube logo"/>
            <SocialItem imgUrl={ttLogo} link="#" alt="twitter logo"/>
            <SocialItem imgUrl={tgLogo} link="#" alt="telegram logo"/>
            <SocialItem imgUrl={vkLogo} link="#" alt="vk logo"/>
          </div>
        </div>
      </footer>

    </div>
  )
}