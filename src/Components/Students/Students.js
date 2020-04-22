import React from 'react';
import { Redirect } from 'react-router-dom';
import shortId from 'shortid';

import Header from '../Header/header.js';
import Footer from '../Footer/Footer.js';
import { Context } from '../../Context/Provider';


const Students = () => {
  const { state } = React.useContext(Context);
  // get the name (if any) of the student in the current url
  const studentNameInUrl = window.location.href
    .replace(new RegExp('.*' + 'students/'), '')
    .replace(/%20/g, ' ');
  // either saves the student coming from the home page, or fins the one through the url
  const myStudent = state.currentStudent || state.students
    .filter((student) => student.english.name === studentNameInUrl)[0];

  return (
    <div>
      {myStudent ?
        <div>
          <Header />
          <h2>Student profile</h2>
          <p>Name: {myStudent[state.language].name}</p>
          <p>Nationality: {myStudent[state.language].from}</p>
          <p>Living In: {myStudent[state.language].livingIn}</p>
          <p>Date of Birth: {myStudent[state.language].dateOfBirth}</p>
          <p>Linkedin {myStudent[state.language].linkedin}</p>
          <p>Languages: {myStudent[state.language].languages}</p>
          <p>Long Description: {myStudent[state.language].longDescription}</p>
          <p>Github Profile: {myStudent[state.language].github}</p>
          <div>{myStudent[state.language].technologies.map((technology) => (
            <p key={shortId.generate()}>{technology}</p>
          ))}</div>
          <div>Personal Projects:
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
          </div>
          <p>Video: {myStudent[state.language].video}</p>
          <p>Social Network: {myStudent[state.language].socialNetwork}</p>
          <p>Video: {myStudent[state.language].video}</p>
          <p>Calendly: {myStudent[state.language].calendly}</p>

          <Footer />
        </div>
        :
        <Redirect to="/" /> /* if no student found, go back to home page */}
    </div>
  );
};


export default Students;
