import { GlobalStyleComponent } from "styled-components"
import "@fontsource/dancing-script"


const GlobalStyles = createGlobalStyles`
*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body {
    font-family: "Dancing Script", cursive;
    overflow-x: hidden;

}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;

}

a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;