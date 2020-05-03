import React from 'react';
import shortId from 'shortid';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './StudentList.css';
import { Context } from '../../../Context/Provider';


const StudentList = () => {
  const { state, getCurrentStudent } = React.useContext(Context);

  return (
    <div>
      <h1 className="developers">{state.texts[state.language].header.developerTitle}</h1>
      <div className="main-page-main-students-container">
        <div className="list-of-students-container">
          {
            state.students.map((student) => (
              <Fade bot>
                <div key={shortId.generate()} className="card-students">
                  <div className="img-student">
                    <img
                      className="img-card"
                      src={student[state.language].profilePicture}
                      alt="student profile"
                    />
                  </div>
                  <div className="student-quote">
                    <h2 className="short-description">&quot;{student[state.language].shortDescription}&quot;</h2>
                    <div className="name-and-from">
                      <div className="name-in-description">
                        <h3 className="h3-card-title">{student[state.language].name} <span className="student-list-from">{state.texts[state.language].header.from}{student[state.language].from}</span></h3>
                      </div>
                      <div className="button-in-description">
                        <button
                          type="button"
                          className="btn-student"
                          onClick={() => getCurrentStudent(student)}
                        >
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'white',
                            }}
                            to={`/students/${student[state.language].name}`}
                          >
                            {state.texts[state.language].header.seeMore}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="separator" />
                </div>
              </Fade>
            ))
          }
        </div>

      </div>

    </div>
  );
};
export default StudentList;
