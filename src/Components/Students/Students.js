import React from 'react';
import { Redirect } from 'react-router-dom';
import shortId from 'shortid';
import YouTube from 'react-youtube';

import Header from '../Header/header.js';
import Footer from '../Footer/Footer.js';
import { Context } from '../../Context/Provider';
import { Flags } from '../../Utils/Flags';
import './Students.css';

// const onReady = (event) => {
//   // access to player in all event handlers via event.target
//   event.target.pauseVideo();
// };

const Students = () => {
  const { state } = React.useContext(Context);
  // get the name (if any) of the student in the current url
  const studentNameInUrl = window.location.href
    .replace(new RegExp('.*' + 'students/'), '')
    .replace(/%20/g, ' ');
  // either saves the student coming from the home page, or fins the one through the url
  const myStudent = state.currentStudent || state.students
    .filter((student) => student.english.name === studentNameInUrl)[0];

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {myStudent ?
        <>
          <Header />
          <div className="student-profile-container">
            <div className="profile-header">
              <div className="profile-info-container">
                <div className="profile-info">
                  <div className="profile-image-container">
                    <img className="profile-image" src={myStudent.english.profilePicture} alt="profile" />
                  </div>
                  <div className="profile-center">
                    <p className="name">{myStudent[state.language].name}</p>
                    <p className="from-living">From <span className="from-living-city">{myStudent[state.language].from}</span></p>
                    <p className="from-living">Living in <span className="from-living-city">{myStudent[state.language].livingIn}</span></p>
                  </div>
                  <div className="profile-right">
                    {myStudent[state.language].languages.map((language) => <img className="language-image" src={Flags[language]} alt="language" />)}
                    <p className="birth-date">{myStudent[state.language].dateOfBirth}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-student-container">
            <div>
              <div className="main-student-info">
                <h2 className="header-title">About me</h2>
                <hr className="separator" />
                {myStudent[state.language].longDescription.map((paragraph) =>
                  <p>{paragraph}</p>)}
                <h2 className="header-title">Watch me</h2>
                <hr className="separator" />
                <YouTube videoId="4XAC1yuGLi4" opts={opts} onReady={(e) => e.target.pauseVideo()} />
                <h2 className="header-title">Find me on</h2>
                <hr className="separator" />

                <p>Linkedin {myStudent[state.language].linkedin}</p>
                <p>Github Profile: {myStudent[state.language].github}</p>
                <p>Social Network: {myStudent[state.language].socialNetwork}</p>
                <h2 className="header-title">My projects</h2>
                <hr className="separator" />

                {myStudent[state.language].personalProjects.map((project) => (
                  <div key={shortId.generate()}>
                    <p>{project.projectName}</p>
                    <p>{project.projectGithub}</p>
                    <p>{project.projectLink}</p>
                    <p>{project.projectDescription}</p>
                    <div>{project.collaborators.map((collaborator) => (
                      <p key={shortId.generate()}>{collaborator}</p>
                    ))}</div>
                    <div>{project.technologies.map((technology) => (
                      <p key={shortId.generate()}>{technology}</p>
                    ))}
                    </div>
                  </div>
                ))}

                {myStudent[state.language].technologies.map((technology) => (
                  <p key={shortId.generate()}>{technology}</p>
                ))}

                <p>Video: {myStudent[state.language].video}</p>
                <p>Calendly: {myStudent[state.language].calendly}</p>
              </div>
            </div>

          </div>

          <Footer />
        </>
        :
        <Redirect to="/" /> /* if no student found, go back to home page */}
    </>
  );
};


export default Students;
