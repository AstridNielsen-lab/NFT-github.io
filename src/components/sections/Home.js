import React from 'react'
import Styled from 'styled-components'

const Section = Styled.Section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.text};
`

const container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

`

const Home = () => {
  return (
    <container> 
      <h1>Text</h1>
      <h1>Video</h1>
    </container>
}

export default Home