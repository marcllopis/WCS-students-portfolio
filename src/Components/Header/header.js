import React from 'react';
import { Link } from 'react-router-dom';
import spainFlag from './spainFlag.svg';
import englishFlag from './englishFlag.svg';
import { Context } from '../../Context/Provider';
import './header.css';


const Header = () => {
  const { changeLanguage } = React.useContext(Context);

  return (
    <div className="titleContainer">
      <div className="bootcampName">
        <Link style={{ textDecoration: 'none' }} to="/"><h3 className="campusName">Barcelona Campus</h3></Link>
      </div>
      <div className="countryContact">
        <img onClick={() => changeLanguage('english')} alt="English" src={englishFlag} className="countryFlag" />
        <img onClick={() => changeLanguage('spanish')} alt="Spain" src={spainFlag} className="countryFlag" />
      </div>
    </div>
  );
};

export default Header;
