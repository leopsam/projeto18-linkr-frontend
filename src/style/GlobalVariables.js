import { createGlobalStyle } from "styled-components"

const GlobalVariables = createGlobalStyle`
    :root {
        --black-background: #151515
        --grey-background: #333333
        
        --grey-imput-text: #9F9F9F       
        --white: #FFFFFF
        --blue-button: #1877F2

        --font-Lato: 'Lato', sans-serif;
        --font-Oswald: 'Oswald', sans-serif;
        --font-Passion: 'Passion One', cursive;
    }
`
export default GlobalVariables