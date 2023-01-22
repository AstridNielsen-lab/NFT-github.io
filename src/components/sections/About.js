import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';


const Section= styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center; 
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;

/* backgroud-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

`

const subTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

`


const About = () => {
    return (
      <Section>
          <Container>
              <Box> <Carousel /> </Box>
              <Box>
                <title>Welcome to Disparat NFT Collections</title>
                <subText>
                O clube Disparat NFT é uma coleção privada de colecionáveis digitais exclusivos de NFTs. O Disparat NFT é armazenado como tokens ERC-721 no Ethereum Blockchain e hospedado no IPFS.
                </subText>
                <subTextLight>
                com mais de 200 características de desenho de mão, cada NFT é único e vem com uma associação a um grupo exclusivo de investidores de sucesso. Junte-se a uma comunidade ambiciosa em constante crescimento com múltiplos benefícios e utilidades.
                </subTextLight>
                <ButtonContainer><ThemeProvider theme={dark}>
                <Button text="ENTRE EM NOSSO DISCORD" link="#"></Button>
                </ThemeProvider>
                </ButtonContainer>
              </Box>
            </Container>
      </Section>
  )
}

export default About