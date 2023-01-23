import React from 'react'
import styled from 'styled-components';


const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 80%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`

const MenuItem = styled.il`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}`

const Navigation = () => {
  return (

    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
        <h2>Menu</h2>
        <h2>Button</h2>
      </NavBar>
    </Section>
  )
}

export default Navigation;