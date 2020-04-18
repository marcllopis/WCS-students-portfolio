import React from 'react';
import StudentList from './StudentList/StudentList'
import './Home.css'

const Home = () => (
  <div className="home">
    <h1>HOME</h1>
    <div className='cards'>
    <StudentList />
    <StudentList />
    <StudentList />
    <StudentList />
    <StudentList />
    <StudentList />
    <StudentList />
    </div>
  </div>
);

export default Home;
