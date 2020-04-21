import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Context } from '../../Context/Provider';


const Students = (props) => {
  const { state } = React.useContext(Context);
  console.log(state.student)
  return (
    <div>
      <Header />
      <p>Student profile</p>
      {/*here is the problem, state.student is the index of the student in the array, but it's only saved when you choose it in the main page. We haven't resolved how to put all the students rutes related with the data if you want to go inside the student page by the route */}
      <p>Name: {state.students[state.student][state.language].name}</p>
      <p>Nationality: {state.students[0][state.language].from}</p>
      <p>Living In: {state.students[0][state.language].livingIn}</p>
      <p>Date of Birth: {state.students[0][state.language].dateOfBirth}</p>
      <p>Linkedin {state.students[0][state.language].linkedin}</p>
      <p>Languages: {state.students[0][state.language].languages}</p>
      <p>Long Description: {state.students[0][state.language].longDescription}</p>
      <p>Github Profile: {state.students[0][state.language].github}</p>
      <div>{state.students[0][state.language].technologies.map((technology, index) => (
        <p key={index}>{technology}</p>
      ))}</div>
    <div>Personal Projects: {state.students[0][state.language].personalProjects.map((project, index) => (
        <div key={index}>
          <p>{project.projectName}</p>
          <p>{project.projectGithub}</p>
          <p>{project.projectLink}</p>
          <p>{project.projectDescription}</p>
          <div>{project.collaborators.map((collaborator, index) => (
            <p key={index}>{collaborator}</p>
          ))}</div>
          <div>{project.technologies.map((technology, index) => (
            <p key={index}>{technology}</p>
          ))}</div>

        </div>
      ))}</div>

      <p>Video: {state.students[0][state.language].video}</p>
      <p>Social Network: {state.students[0][state.language].socialNetwork}</p>
      <p>Video: {state.students[0][state.language].video}</p>
      <p>Calendaly: {state.students[0][state.language].calendly}</p>

      <Footer />
    </div>

  );
};


export default Students;
