import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        /* background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); */
        font-family: MontserratMedium;
        color: white;
        background: #111;
        user-select: none;
    }
`;

export default GlobalStyle;
