import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxl};
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
        <p><img class="logodispa" src="https://static.wixstatic.com/media/a6112a_bc8977e76690417e86ea7194b32a7f25~mv2.png/v1/crop/x_48,y_28,w_1598,h_1598/fill/w_309,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/disparatetech%20site%20radio.png" alt="disparatechno"></img>Disparat</p>
      </Link>
    </LogoText>
  )
}

export default Logo