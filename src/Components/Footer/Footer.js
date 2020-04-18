import React from 'react';
import './Footer.css';
import logo from '../../Utils/img/wcs_logo_footer.png';
import facebook from '../../Utils/img/facebook-logo.png';
import twitter from '../../Utils/img/twitter-logo.png';
import linkedin from '../../Utils/img/linkedin-logo.png';
import youtube from '../../Utils/img/youtube-logo.png';
import github from '../../Utils/img/github-logo.png';
import instagram from '../../Utils/img/instagram-logo.png';

const Footer = () => (

  <div className="container-footer">
    <div className="container1">
      <img className="logo" src={logo} alt="wildcodeschool logo" />
      <br />
      <label>¡Nuestra red favorita!</label>
      <div className="container-logo">
        <a href="https://www.facebook.com/wildcodeschoolspain" target="_blank" rel="noopener noreferrer" title="The Wild en Facebook"><img src={facebook} alt="facebook" /></a>
        <a href="https://twitter.com/WildcodeschoolM" target="_blank" rel="noopener noreferrer" title="The Wild en Twitter"><img src={twitter} alt="twitter" /></a>
        <a href="https://www.linkedin.com/school/wild-codes-chool/" target="_blank" rel="noopener noreferrer" title="The Wild en LinkedIn"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw" target="_blank" rel="noopener noreferrer" title="The Wild on Youtube"><img src={youtube} alt="" /></a>
        <a href="https://github.com/WildCodeSchool" target="_blank" rel="noopener noreferrer" title="The Wild on Github"><img src={github} alt="youtube" /></a>
        <a href="https://www.instagram.com/wildcodeschoolspain/" target="_blank" rel="noopener noreferrer" title="The Wild on Instagram"><img src={instagram} alt="instagram" /></a>
      </div>
    </div>
    <div>
      <div>
        <div className="container2">
          <div>
            <label>Nuestros campus en Europa</label>
            <ul>
              <li><a href="/es-ES/campus/barec">Barcelona</a></li>
              <li><a href="/es-ES/campus/berlin">Berlín</a></li>
              <li><a href="/es-ES/campus/brussels">Bruselas</a></li>
              <li><a href="/es-ES/campus/bucharest">Bucarest</a></li>
              <li><a href="/es-ES/campus/lisbon">Lisboa</a></li>
              <li><a href="/es-ES/campus/london">Londres</a></li>
              <li><a href="/es-ES/campus/madrid">Madrid</a></li>
            </ul>
            <label>Más información</label>
            <ul>
              <li><a href="/es-ES/faq/enfoque-formativo">Enfoque formativo</a></li>
              <li><a href="/es-ES/faq/financiacion">Financiación</a></li>
              <li><a href="/es-ES/faq/formacion">Formación</a></li>
              <li><a href="/es-ES/faq/proceso-de-admision">Proceso de admisión</a></li>
            </ul>
          </div>
          <div>
            <label>Nuestros campus en Francia</label>
            <ul>
              <li><a href="/es-ES/campus/la-loupe">La Loupe</a></li>
              <li><a href="/es-ES/campus/paris">París</a></li>
            </ul>
            <label>Sobre nosotros</label>
            <ul>
              <li><a href="/es-ES/sobre-nosotros">Descubre nuestra escuela</a></li>
              <li><a href="/es-ES/translation%20missing:%20es-ES.routes.contacts">Contacto</a></li>
            </ul>
          </div>
          <div>
            <label>Nuestra formación</label>
            <ul>
              <li><a href="/es-ES/formacion/web-developer-full-time">Desarrollo web - Full time<span>5 meses - Intensivo Full-time</span></a></li>
              <li><a href="/es-ES/formacion/data-analyst">Data analyst<span>5 meses - Full-time</span></a></li>
              <li><a href="/es-ES/formacion/front-end-developer-part-time">Front-end developer - Remote part-time<span>5 meses - Part-time</span></a></li>
            </ul>
            <label>Comunidad de Wilders</label>
            <ul>
              <li><a href="/es-ES/blog">Blog</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.welcometothejungle.co/companies/wild-code-school">Únete al equipo</a></li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <div>
            <ul>
              <li><a href="/es-ES/normas-de-uso-generales">Normas de uso generales</a></li>
              <li><a href="/es-ES/politicade-de-proteccion-de-datos">Política de protección de datos</a></li>
            </ul>
            <p>
              18 rue de la gare 28480 La Loupe France ©
              2013-2019 Wild Code School.
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
