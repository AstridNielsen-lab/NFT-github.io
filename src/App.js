import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { light } from './styles/Themes'

import { Navigation } from './Navigation';
import { Home } from './Home';
import { Roadmap } from './Roadmap';
import { Showcase } from './Showcase';
import { Team } from './Team';
import { About } from './About';
import { Faq } from './Faq';
import { Footer } from './Footer';

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
