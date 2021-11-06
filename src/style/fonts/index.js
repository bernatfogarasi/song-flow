import { css } from "styled-components";

import MontserratTTF from "./Montserrat/Montserrat-Regular.ttf";
import MontserratMediumTTF from "./Montserrat/Montserrat-Medium.ttf";
import MontserratSemiboldTTF from "./Montserrat/Montserrat-SemiBold.ttf";
import GlutenTTF from "./Gluten/Gluten-VariableFont_wght.ttf";

const Fonts = css`
  @font-face {
    font-family: Montserrat;
    src: url(${MontserratTTF});
  }
  @font-face {
    font-family: MontserratMedium;
    src: url(${MontserratMediumTTF});
  }
  @font-face {
    font-family: MontserratSemibold;
    src: url(${MontserratSemiboldTTF});
  }
  @font-face {
    font-family: Gluten;
    src: url(${GlutenTTF});
  }
`;

export default Fonts;
