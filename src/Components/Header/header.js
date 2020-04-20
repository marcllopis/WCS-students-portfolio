import React from 'react';
import logo from './wildCodeLogo.png';
import spainFlag from './spainFlag2.svg';
import contactIcon from './contactIcon.png';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Provider';
import './header.css';
import { useState } from 'react';


const Header = () => {
  const { state } = React.useContext(Context);
  const [show, setShow] = useState(false);


  return (
    <div className="titleContainer">
      <img alt="logo WCS" src={logo} className="logoWCS" />
      <h3 className="campusName">{state[1].campusName}</h3>
      <div className="countryContact">
        <img alt="Spain" src={spainFlag} className="countryFlag" />
        <button
          className="contactIcon"
          onClick= {(e) => setShow(true)}
          >
          <img alt="Contact Icon" src={contactIcon}/>
        </button>
          {show &&
            <div className="modalContact">
            <h5>Contact</h5>
            <ul></ul>
            </div>
          }

      </div>
    </div>
  );

};

export default Header;
