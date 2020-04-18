import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/Footer.js'
import Description from './Description/description';
import StudentList from '../Home/StudentList/StudentList'

const Home = () => (
  <div>
    <Header />
    <Description />
    <StudentList />
    <Footer/>
  </div>
);

export default Home;
