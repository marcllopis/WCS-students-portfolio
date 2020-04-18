import React from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';
import { Context } from '../../../Context/Provider';

const StudentList = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="card-students">
      <h3 className="h3-card-title">{state.students[0].english.name}</h3>
      <img
        className="img-card"
        src="https://cdn4.vectorstock.com/i/1000x1000/52/83/default-placeholder-profile-icon-vector-14065283.jpg"
        alt="student profile"
      />

      <div className="info">
        <div className="box-info">
          <p>Age: {state.students[0].english.age}</p>
          <p>Nationality: {state.students[0].english.nationality}</p>
          <p>Languages: {state.students[0].english.languages}</p>
          <p className="short-descriptor">{state.students[0].english.shortDescription}</p>

        </div>

        <button type="button" className="btn-student">
          <Link to="/students">See more</Link>
        </button>

      </div>
    </div>
  );
};
export default StudentList;
