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
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
`

const About = () => {
    return (
      <Section>
          <Container>
              <Box> <Carousel /> </Box>
              <Box>
                <Title>Welcome to Disparat NFT </Title>
                <SubText>
                The NFT Fuel Disparat Club, will be our fuel, when you buy the NFTs, you are helping our content creators, the NFT Fuel, is a private collection of exclusive digital collectibles. The Disparat NFT Fuel, is stored as ERC-721 tokens in the Ethereum Blockchain and hosted on IPFS.
                </SubText>
                <SubTextLight>
                With many AI design features, each NFT is unique and comes with an exclusive scheduled help group membership among other investment-friendly enhancements. Join an ever-growing ambitious community with multiple benefits and utilities.
                </SubTextLight>
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