import React from 'react';
import Styled from 'styled-components';


const LogoText = Styled.h1`
font-family: "Dancing-Script", cursive;
font-size: ${props =>props.theme.fontxxxl}
color: ${props => props.theme.text}
transition: all 0.2s ease;

&:hover{
  transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
          
    </LogoText>
  )
}

export default Logo