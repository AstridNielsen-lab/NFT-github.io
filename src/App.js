import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/sections/Home";
import { Roadmap } from "./components/sections/Roadmap";
import { Showcase } from "./components/sections/Showcase";
import { Team } from "./components/sections/Team";
import { About } from "./components/sections/About";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/Footer";

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
