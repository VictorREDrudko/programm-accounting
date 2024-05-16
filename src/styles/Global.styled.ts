import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Cousine", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
    line-height: 1.2;
    min-width: 768px;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.font}
  }

  ul {
    list-style: none;
  }

  @font-face {
    font-family: "Cousine", monospace;
    src: url("../fonts/Cousine-Regular.ttf");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Cousine", monospace; 
    src: url("../fonts/Cousine-Bold.ttf");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Cousine", monospace; 
    src: url("../fonts/Cousine-Italic.ttf");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Cousine", monospace; 
    src: url("../fonts/Cousine-BoldItalic.ttf");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Marck Script", cursive; 
    src: url("../fonts/MarckScript-Regular.ttf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Yanone Kaffeesatz", sans-serif; 
    src: url("../fonts/YanoneKaffeesatz-Medium.ttf");
    font-weight: 500;
    font-style: normal;
  }
`






//   /* Для кнопок убираем серый background */
//   button {
//     background-color: unset;
//     border: none;
//     cursor: pointer;
//     color: ${Theme.colors.font};
//     width: 150px;
//     height: 32px;
//     font-family: "Crimson Text", sans-serif;
//   }

//   /* Отступы в секциях */
//   section {
//     padding: 120px 0;

//     @media ${Theme.media.mobile} {
//       padding: 80px 0;
//     }
//   }

//   /* Задаем цвет фона для четных и не четных секций */
//   section:nth-of-type(odd) {
//     background-color: ${Theme.colors.mainBg};
//   }

//   section:nth-of-type(even) {
//     background-color: ${Theme.colors.secondBg};
//   }

//   h3 {
//     font-size: 16px;
//     font-weight: 700;
//   }

//   h4 {
//     font-size: 16px;
//     font-weight: 400;
//     color: ${Theme.colors.textColor};
//   }

//   p {
//     font-size: 14px;
//     font-weight: 400;
//     color: ${Theme.colors.textColor};
//     line-height: 1.4;
//   }
// `