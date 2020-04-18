import React from 'react';
import { Context } from '../../Context/Provider';


const Students = () => {
  const { state } = React.useContext(Context);
  return (
    <div>
      <p>Student profile</p>
      <p>Name: {state.students[0].english.name}</p>
      <p>Nationality: {state.students[0].english.nationality}</p>
    </div>
  );
};


export default Students;
