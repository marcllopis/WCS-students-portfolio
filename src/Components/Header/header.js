import React from 'react';
import logo from './wildCodeLogo.png';
import spainFlag from './spainFlag2.svg';
import contactIcon from './contactIcon.png'
import './header.css';


const Header = () => {
  return (
    <div className="titleContainer">
      <img alt="logo WCS" src={logo} className="logoWCS" />
      <h3 className="campusName">Barcelona Campus</h3>
      <div className="countryContact">
        <img alt="Spain" src={spainFlag} className="countryFlag" />
        <img alt="Contact Icon" src={contactIcon} className="contactIcon" />

      </div>
    </div>
  );

};

export default Header;
