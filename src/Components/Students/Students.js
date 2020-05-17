import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import shortId from 'shortid';

import Header from '../Header/header.js';
import { Context } from '../../Context/Provider';
import { Flags } from '../../Utils/Flags';
import './Students.css';
import { Technologies } from '../../Utils/Technologies';
import Github from '../../Utils/img/github.svg';
import Facebook from '../../Utils/img/facebook.png';
import Linkedin from '../../Utils/img/linkedin.png';
import Calendly from '../../Utils/img/calendly.png';
import Gmail from '../../Utils/img/gmail.png';
import Instagram from '../../Utils/img/instagram.png';
import Twitter from '../../Utils/img/twitter.png';
import YTNotReady from '../../Utils/img/yt.png';


const Students = () => {
  const { state } = React.useContext(Context);
  // get the name (if any) of the student in the current url
  const studentNameInUrl = window.location.href
    .replace(new RegExp('.*' + 'students/'), '')
    .replace(/%20/g, ' ')
    .replace(/%C3%B3/g, 'ó'); // special case for 'Abelló' surname
  // either saves the student coming from the home page, or find the one through the url
  const myStudent = state.currentStudent || state.students
    .filter((student) => student[state.language].name === studentNameInUrl)[0];

  const checkIfStudent = (selectedStudent) => state.students
    .filter((student) => student[state.language].name === selectedStudent);

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
                    <img className="profile-image" src={myStudent[state.language].profilePicture} alt="profile" />
                  </div>
                  <div className="profile-center">
                    <p className="name">{myStudent[state.language].name}</p>
                    <p className="birth-date-mvl">{myStudent[state.language].dateOfBirth}</p>
                    <p className="from-living">{state.texts[state.language].profile.from}<span className="from-living-city">{myStudent[state.language].from}</span></p>
                    <p className="from-living">{state.texts[state.language].profile.living}<span className="from-living-city">{myStudent[state.language].livingIn}</span></p>
                  </div>
                  <div className="profile-right">
                    <div>
                      {myStudent[state.language].languages.map((language) => <img className="language-image" key={shortId.generate()} src={Flags[language]} alt="language" />)}
                    </div>
                    <p className="birth-date">{myStudent[state.language].dateOfBirth}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flags-mvl">
              {myStudent[state.language].languages.map((language) => <img className="language-image" key={shortId.generate()} src={Flags[language]} alt="language" />)}
            </div>
            <div className="cities-mvl">
              <p className="from-living-mvl">{state.texts[state.language].profile.from} <span className="from-living-city-mvl">{myStudent[state.language].from}</span></p>
            </div>
          </div>
          <div className="main-student-container">
            <div className="left-student-container">
              <div className="about-me">
                <h2 className="header-title">{state.texts[state.language].profile.aboutMe}
                  {
                    myStudent[state.language].instagram !== '' &&
                    <span className="tech-right">
                      <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].instagram}><img className="tech-image" src={Instagram} alt="instagram logo" /></a>
                    </span>
                  }
                  {
                    myStudent[state.language].twitter !== '' &&
                    <span className="tech-right">
                      <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].twitter}><img className="tech-image" src={Twitter} alt="twitter logo" /></a>
                    </span>
                  }
                  {
                    myStudent[state.language].facebook !== '' &&
                    <span className="tech-right">
                      <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].facebook}><img className="tech-image" src={Facebook} alt="facebook logo" /></a>
                    </span>
                  }
                  <span className="tech-right">
                    <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].calendly}><img className="tech-image" src={Calendly} alt="calendly logo" /></a>
                  </span>
                  <span className="tech-right">
                    <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].github}><img className="tech-image" src={Github} alt="github logo" /></a>
                  </span>
                  <span className="tech-right">
                    <a target="_blank" rel="noopener noreferrer" href={myStudent[state.language].linkedin}><img className="tech-image" src={Linkedin} alt="linkedin logo" /></a>
                  </span>
                  <span className="tech-right">
                    <a href={`mailto: ${myStudent[state.language].email}`}><img title="gmail" className="tech-image" src={Gmail} alt="gmail logo" /></a>
                  </span>
                </h2>
                <hr className="separator-student" />
                {myStudent[state.language].longDescription.map((paragraph) =>
                  <p key={shortId.generate()}>{paragraph}</p>)}
                <p className="living-mvl">{state.texts[state.language].profile.living} <span className="from-living-city-mvl">{myStudent[state.language].livingIn}</span></p>
                <div className="tech-right">
                  <span className="technologies-used">{state.texts[state.language].profile.tech}</span> {myStudent[state.language].technologies.map((technology) => (
                    <img key={shortId.generate()} className="tech-image" src={Technologies[technology]} alt="technology" />
                  ))}
                </div>
              </div>

              <div className="watch-me">
                <h2 className="header-title">{state.texts[state.language].profile.watchMe}</h2>
                <hr className="separator-student" />
                {myStudent[state.language].video
                  ? <iframe
                    className="yt-iframe"
                    title="video"
                    id="ytplayer"
                    type="text/html"
                    src={`https://www.youtube.com/embed/${myStudent[state.language].video}?autoplay=0`}
                    frameBorder="0"
                  />
                  : <div>
                    <img alt="video not ready" src={YTNotReady} />
                    <p>{state.texts[state.language].profile.ytNotReady}</p>
                  </div>}
              </div>
            </div>
            <div className="right-student-container">
              <div className="my-projects">

                <h2 className="header-title">{state.texts[state.language].profile.myProjects}</h2>
                <hr className="separator-student" />

                {myStudent[state.language].personalProjects.map((project) => (
                  <div key={shortId.generate()}>
                    <p className="project-name">{project.projectName}
                      <span className="tech-right">{project.technologies.map((technology) => (
                        <img key={shortId.generate()} className="tech-image" src={Technologies[technology]} alt="technology" />
                      ))}
                      </span>
                    </p>
                    <img className="project-image" src={project.projectImage} alt={project.projectName} />
                    <p>{project.projectDescription}.
                      {state.texts[state.language].profile.checkIt}
                      <a href={project.projectLink}>
                        {state.texts[state.language].profile.here}
                      </a>
                    </p>
                    <p>{state.texts[state.language].profile.developedWith}
                      {project.collaborators.map((collaborator) => (
                        <span className="project-collaborators" key={shortId.generate()}>
                          {
                            checkIfStudent(collaborator).length > 0
                              ? <span><span role="img" aria-label="emoji"> 👤</span><Link style={{ textDecoration: 'none' }} target="_blank" to={`/students/${collaborator}`}><span className="collaborator-link">{collaborator} </span></Link></span>
                              : <span className="collaborator-no-link">{collaborator} </span>
                          }
                        </span>
                      ))}
                      <span className="tech-right">
                        <a href={project.projectGithub}><img className="tech-image" src={Github} alt="github logo" /></a>
                      </span>
                    </p>
                    <hr className="separator-student" />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </>
        :
        <Redirect to="/" /> /* if no student found, go back to home page */}
    </>
  );
};


export default Students;
