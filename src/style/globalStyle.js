import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts}
    body {
        margin: 0;
        /* background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); */
        font-family: MontserratMedium;
    }
`;

export default GlobalStyle;
