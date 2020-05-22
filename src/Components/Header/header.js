import React from 'react';
import { Link } from 'react-router-dom';
import spainFlag from './spainFlag.svg';
import englishFlag from './englishFlag.svg';
import { Context } from '../../Context/Provider';
import './header.css';


const Header = () => {
  const { state, changeLanguage } = React.useContext(Context);

  return (
    <div className="titleContainer">
      <div className="bootcampName">
        <Link style={{ textDecoration: 'none' }} to="/"><h3 className="campusName">Wild Code School Barcelona - Alumni</h3></Link>
        <Link style={{ textDecoration: 'none' }} to="/"><h3 className="campusName-mvl">WCS Alumni</h3></Link>
      </div>
      <div className="countryContact">
        <img onClick={() => changeLanguage('english')} alt="English" src={englishFlag} className={state.language === 'english' ? 'countryFlag borderFlag' : 'countryFlag'} />
        <img onClick={() => changeLanguage('spanish')} alt="Spain" src={spainFlag} className={state.language === 'spanish' ? 'countryFlag borderFlag' : 'countryFlag'} />
      </div>
    </div>
  );
};

export default Header;
