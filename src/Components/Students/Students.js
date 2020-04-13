import React from 'react';
import { Context } from '../../Context/Provider';


const Students = () => {
  const { state } = React.useContext(Context);
  return (
    <div>
      <p>Student profile</p>
      <p>Name: {state[0].name}</p>
      <p>Age: {state[0].age}</p>
      <p>Nationality: {state[0].nationality}</p>
      <p>Languages: {state[0].languages}</p>
    </div>
  );
};


export default Students;
