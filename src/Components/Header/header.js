import React from 'react';
import Logo from './wildCodeLogo.png'
import SpainFlag from './spainFlag2.svg'
import './header.css'


const Header = () => {
  return (
  <div className="titleContainer">
    <img src={Logo} className="logoWCS"/>
    <h3 className="campusName">Barcelona Campus</h3>
    <div className="countryContainer">
      <img alt="Spain" src={SpainFlag} className="countryFlag"></img>
    </div>
  </div>
  )

}

export default Header
