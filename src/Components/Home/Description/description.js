import React from 'react';
import { Context } from '../../../Context/Provider';


const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <div>
      <p>{state[0].description}</p>
    </div>
  );
};


export default Description;
