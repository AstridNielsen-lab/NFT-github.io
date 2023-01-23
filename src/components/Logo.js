import React from 'react';


const LogoText = styled.h1`
font-family: "Dancing-Script", cursive;
font-size: ${props =>props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
  transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
        RPL.
      </Link>    
    </LogoText>
  )
}

export default Logo;