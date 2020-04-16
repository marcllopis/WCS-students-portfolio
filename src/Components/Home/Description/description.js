import React from 'react';
import { Context } from '../../../Context/Provider';
import styled from 'styled-components';

const IntroContainer = styled.div`
    width: 100%;
    background-image: url('https://via.placeholder.com/300.png/09f/fff');
    right: 0;
    background-position: 50rem;
    background-repeat: no-repeat;
    background-size: auto 100%;
`;

const DescContainer = styled.div`
  max-width: 50%;
  padding: ${props => props.theme.paddings.default};
  font-family: ${props => props.theme.fonts.varelaRound};
`;

const TitleDescription = styled.h1`
  font-size: 2.8em;
`

const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <IntroContainer>
      <DescContainer>
        <TitleDescription>Wild Code School</TitleDescription>
        <p>{state[0].description}</p>
      </DescContainer>
    </IntroContainer>
  );
};


export default Description;
