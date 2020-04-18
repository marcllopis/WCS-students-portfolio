import React from 'react';
import styled from 'styled-components';
import { Context } from '../../../Context/Provider';


const IntroContainer = styled.div`
    width: 94%;
    background-image: url('https://via.placeholder.com/300.png/09f/fff');
    right: 0;
    background-position: 50rem;
    background-repeat: no-repeat;
    background-size: auto 100%;
    padding: ${(props) => props.theme.paddings.default};
`;

const DescContainer = styled.div`
  max-width: 50%;
  font-family: ${(props) => props.theme.fonts.varelaRound};
`;

const TitleDescription = styled.h1`
  font-size: 2.8em;
`;

const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <IntroContainer>
      <DescContainer>
        <TitleDescription>Wild Code School</TitleDescription>
        <p>{state.texts.english.header.description}</p>
      </DescContainer>
    </IntroContainer>
  );
};


export default Description;
