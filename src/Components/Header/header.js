import React from 'react';
import logo from './wildCodeLogo.png';
import spainFlag from './spainFlag2.svg';
import contactIcon from './contactIcon.png';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Provider';
import './header.css';


const Header = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="titleContainer">
      <img alt="logo WCS" src={logo} className="logoWCS" />
      <h3 className="campusName">{state[1].campusName}</h3>
      <div className="countryContact">
        <img alt="Spain" src={spainFlag} className="countryFlag" />
        <Link
          className="contactIcon">
          <img alt="Contact Icon" src={contactIcon}/>
        </Link>
      </div>
    </div>
  );

};

export default Header;
