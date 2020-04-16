import React from 'react';
import { Context } from '../../../Context/Provider';
import styled from 'styled-components';


const DescContainer = styled.div`
  width: 100%;
  padding: ${props => props.theme.paddings.default};
  font-family: ${props => props.theme.fonts.raleway};

`;


const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <DescContainer>
      <p>{state[0].description}</p>
    </DescContainer>
  );
};


export default Description;
