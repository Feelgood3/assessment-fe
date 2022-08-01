/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <div className="header__logo__logo">
          <Link to="/"><img src="/logohome.png" alt="Home" /></Link>
        </div>
      </div>
      <div className="header__about">
        <div className="header__about__box">
          <div className="header__about__box__text">
            <Link to="/About"><p className="header__about__box__text--center">About Me</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
