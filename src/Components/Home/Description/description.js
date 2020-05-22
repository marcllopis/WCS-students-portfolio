import React from 'react';
import styled from 'styled-components';
import shortId from 'shortid';
import { Context } from '../../../Context/Provider';
import RightSideImage from '../../../Utils/img/mainPageBG.png';


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
  font-size: 2em;
  margin-bottom: 0px;
  font-style: italic;
  font-weight: 400;
  @media(max-width: 600px) {
    text-align: left;
    margin-bottom: 10px;
  }
`;

const SubTitleDescription = styled.h1`
  font-size: 2.8em;
  margin-top: 20px;
  margin-bottom: 40px;
  @media(max-width: 600px) {
    text-align: left;
    font-size: 2.4em;
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  padding: ${(props) => props.theme.paddings.default};
  padding-top: 5%;
  @media(max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
`;

const Text = styled.p`
  text-align: justify;
  font-size: 1.1em;
`;

const TextWelcome = styled.p`
  text-align: justify;
  font-size: 1.1em;
  font-weight: bold;
`;

const RightImage = styled.img`
  width: 100%;
  box-shadow: 0 0 15px 15px rgb(140,140,140,0.5);
  @media(max-width: 600px) {
    box-shadow: 0px;

  }
`;


const Description = () => {
  const { state } = React.useContext(Context);
  return (
    <IntroContainer>
      <DescContainer>
        <TitleDescription>
          {state.texts[state.language].header.title}
        </TitleDescription>
        <SubTitleDescription>
          {state.texts[state.language].header.subtitle}
        </SubTitleDescription>
        <TextWelcome>{state.texts[state.language].header.welcome}</TextWelcome>
        {state.texts[state.language].header.description.map((paragraph) =>
          <Text key={shortId.generate()}>{paragraph}</Text>)}
      </DescContainer>
      <ImageContainer>
        <RightImage src={RightSideImage} alt="main page" />
      </ImageContainer>
    </IntroContainer>
  );
};


export default Description;
