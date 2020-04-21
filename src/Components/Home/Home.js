import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Description from './Description/Description';
import StudentList from './StudentList/StudentList';


const Home = () => (
  <div>
    <Header />
    <Description />
    <StudentList />
    <Footer />
  </div>
);

export default Home;
