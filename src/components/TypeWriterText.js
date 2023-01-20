import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
  text-transform: uppercase;
  font-family: "Akaya Telivigala", cursive;
 }
.text-1{
    color: green;
 }
.text-2{
    color: orange;
 }
.text-3{
    color: blue;
 }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  `
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`
const TypeWriterText = () => {
  return (
    <>
    <Title>
    Accumulating Knowledge for the Future
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
  onInit={(typewriter) => {
    typewriter.typeString(`<span class= text-1>focus on studies</span>`)
      .callFunction(() => {
        console.log('String typed out!')
      })
      .pauseFor(2000)
      .deleteAll();

      typewriter.typeString(`<span class= text-2>explore your full potential</span>`)
      .callFunction(() => {
        console.log('String typed out!')
      })
      .pauseFor(2000)
      .deleteAll();

      typewriter.typeString(`<span class= text-3>exercising the hippocampus</span>`)
      .callFunction(() => {
        console.log('String typed out!')
      })
      .pauseFor(2000)
      .deleteAll()

      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

</Title>
<SubTitle>Discovering your self-taught side</SubTitle>
<ButtonContainer>
<Button text='Explore' link="#about" />
</ButtonContainer>
</>
  );
};

export default TypeWriterText;



