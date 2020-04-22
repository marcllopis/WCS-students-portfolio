import React from 'react';
import shortId from 'shortid';
import { Link } from 'react-router-dom';
import './StudentList.css';
import { Context } from '../../../Context/Provider';


const StudentList = () => {
  const { state, getCurrentStudent } = React.useContext(Context);

  return (
    <div>
      {
        state.students.map((student) => (
          <div key={shortId.generate()} className="card-students">
            <h3 className="h3-card-title">{student.english.name}</h3>
            <img
              className="img-card"
              src="https://cdn4.vectorstock.com/i/1000x1000/52/83/default-placeholder-profile-icon-vector-14065283.jpg"
              alt="student profile"
            />

            <div className="info">
              <div className="box-info">
                <p>Age: {student.english.age}</p>
                <p>Nationality: {student.english.nationality}</p>
                <p>Languages: {student.english.languages}</p>
                <p className="short-descriptor">{student.english.shortDescription}</p>

              </div>

              <button
                type="button"
                className="btn-student"
                onClick={() => getCurrentStudent(student)}
              >
                <Link to={`/students/${student.english.name}`}>See more</Link>
              </button>

            </div>
          </div>
        ))
      }
    </div>
  );
};
export default StudentList;
