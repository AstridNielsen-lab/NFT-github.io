import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width:80%;
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
    Discovering your self-taught side 
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(`<span class= text-1>teleported abductees👾</span>`)
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2000)
      .deleteAll()

      typewriter.typeString(`<span class= text-2>successfully transported abductees⚛️</span>`)
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2000)
      .deleteAll()

      typewriter.typeString(`<span class= text-3>completed knowledge transfer👨‍💻⚡</span>`)
      .callFunction(() => {
        console.log('String typed out!');
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
<SubTitle>Be your teacher, I'm self-taught. Social School to Teach Programming</SubTitle>
<ButtonContainer>
<Button text="Explore" link="#about" />
</ButtonContainer>
</>
  );
};

export default TypeWriterText;



