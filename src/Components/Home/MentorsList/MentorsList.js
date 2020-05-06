import React from 'react';
import shortId from 'shortid';
import Fade from 'react-reveal/Fade';

import './MentorsList.css';
import { Context } from '../../../Context/Provider';


const MentorsList = () => {
  const { state } = React.useContext(Context);

  return (
    <div>
      <h1 className="developers">{state.texts[state.language].header.mentorTitle}</h1>
      <div className="main-page-main-mentor-container">
        <div className="list-of-mentor-container">
          {
            state.mentors.map((mentor) => (
              <Fade key={shortId.generate()} bot>
                <div className="card-mentor">
                  <div className="img-mentor">
                    <img
                      className="img-card-mentor"
                      src={mentor[state.language].profilePicture}
                      alt="mentor profile"
                    />
                  </div>
                  <div className="mentor-quote">
                    <div>{mentor[state.language].shortDescription.map(
                      (description) => (
                        <p key={shortId.generate()} className="short-description">
                          {description}
                        </p>
                      ))}
                    </div>
                    <div className="name-and-from">
                      <div className="mentor-name">
                        <h3 className="h3-card-title">{mentor[state.language].name}  <span className="student-list-from">{mentor[state.language].role}</span></h3>
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
export default MentorsList;
