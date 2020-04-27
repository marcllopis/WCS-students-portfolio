import React, { useState } from 'react';
// import logo from './wildCodeLogo.png';
import spainFlag from './spainFlag.svg';
import englishFlag from './englishFlag.svg';
import contactIcon from './contactIcon.png';
import { Context } from '../../Context/Provider';
import './header.css';


const Header = () => {
  const { changeLanguage } = React.useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <div className="titleContainer">
      {/* <img alt="logo WCS" src={logo} className="logoWCS" /> */}
      <h3 className="campusName">Barcelona Campus</h3>
      <div className="countryContact">
        <img onClick={() => changeLanguage('english')} alt="English" src={englishFlag} className="countryFlag" />
        <img onClick={() => changeLanguage('spanish')} alt="Spain" src={spainFlag} className="countryFlag" />
        <img
          alt="Contact Icon" src={contactIcon} className="contactIcon"
          onClick={() => setShow(true)}
        />
        {show &&
          <div
            className="modalContact"
          >
            <h5>Contact</h5>
            <ul />
          </div>}
      </div>
    </div>
  );
};

export default Header;
