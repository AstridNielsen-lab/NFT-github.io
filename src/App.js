import { ThemeProvider } from "styled-components"
import GlobalStyles from "../src/styles/GlobalStyles"
import { light } from "./styles/Themes"

import { Navigation } from "../src/components/Navigation"
import { Home } from "../src/components/sections/Home"
import { Roadmap } from "../src/components/sections/Roadmap"
import { Showcase } from "../src/components/sections/Showcase"
import { Team } from "../src/components/sections/Team"
import { About } from "../src/components/sections/About"
import { Faq } from "../src/components/sections/Faq"
import { Footer } from "../src/components/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <Roadmap />
        <Showcase />
        <Team />
        <About />
        <Faq />
        <Footer />
      </ThemeProvider>

      
    </>
  );
}

export default App;
