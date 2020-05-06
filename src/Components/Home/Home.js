import React from 'react';
import styled from 'styled-components';
import Header from '../Header/header';
// import Footer from '../Footer/Footer.js';
import Description from './Description/description';
import StudentList from './StudentList/StudentList';
import MentorsList from './MentorsList/MentorsList';

const Separator = styled.div`
  background-color: white;
  height: 100px;
`;
const Home = () => (
  <div>
    <Header />
    <Description />
    <StudentList />
    <MentorsList />
    <Separator />
    {/* <Footer /> no needed yet */}
  </div>
);

export default Home;
