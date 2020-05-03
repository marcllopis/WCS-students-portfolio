import React from 'react';
import styled from 'styled-components';
import shortId from 'shortid';
import { Context } from '../../../Context/Provider';


const IntroContainer = styled.div`
    width: 100%;
    display: flex;
    @media(max-width: 600px) {
      flex-direction: column-reverse;
    }
`;

const DescContainer = styled.div`
  max-width: 60%;
  font-family: ${(props) => props.theme.fonts.varelaRound};
  padding: ${(props) => props.theme.paddings.default};
  @media(max-width: 600px) {
    max-width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: justify;
  }
`;

const TitleDescription = styled.h1`
  font-size: 2.8em;
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 500px;
  background-color: aquamarine;
  padding: ${(props) => props.theme.paddings.default};
  @media(max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
`;

const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <IntroContainer>
      <DescContainer>
        <TitleDescription>Fullstack bootcamp Barcelona</TitleDescription>
        {state.texts[state.language].header.description.map((paragraph) =>
          <p key={shortId.generate()}>{paragraph}</p>)}
      </DescContainer>
      <ImageContainer />
    </IntroContainer>
  );
};


export default Description;
