import { createGlobalStyle } from "styled-components";
import Bienchenb from "../fonts/bienchen-sas/Bienchenb.ttf";
import Bienchena from "../fonts/bienchen-sas/Bienchena.ttf";
import Gwangyang from "../fonts/GwangyangTouching.otf";
import TheJamsilThin from "../fonts/TheJamsil1Thin.ttf";
import TheJamsilLight from "../fonts/TheJamsil2Light.ttf";
import TheJamsilRegular from "../fonts/TheJamsil3Regular.ttf";

export const GlobalStyle = createGlobalStyle`
 body, html {
    margin: 0;
    padding: 0;
  }
@font-face {
    font-family: 'Bienchenb';
    font-weight: 300;
    font-style: normal;
    src: url('Bienchenb');
    src: url(${Bienchenb}) format('embedded-opentype'),
         url(${Bienchenb}) format('woff2'),
         url(${Bienchenb}) format('woff'),
         url(${Bienchenb}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'Bienchena';
    font-weight: 700;
    font-style: normal;
    src: url('Bienchena');
    src: url(${Bienchena}) format('embedded-opentype'),
         url(${Bienchena}) format('woff2'),
         url(${Bienchena}) format('woff'),
         url(${Bienchena}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'Gwangyang';
    src: url(${Gwangyang}) format('embedded-opentype'),
         url(${Gwangyang}) format('woff2'),
         url(${Gwangyang}) format('woff'),
         url(${Gwangyang}) format("truetype");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'TheJamsilThin';
    font-weight: 100;
    font-style: normal;
    src: url('TheJamsilThin');
    src: url(${TheJamsilThin}) format('embedded-opentype'),
         url(${TheJamsilThin}) format('woff2'),
         url(${TheJamsilThin}) format('woff'),
         url(${TheJamsilThin}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'TheJamsilLight';
    font-weight: 200;
    font-style: normal;
    src: url('TheJamsilLight');
    src: url(${TheJamsilLight}) format('embedded-opentype'),
         url(${TheJamsilLight}) format('woff2'),
         url(${TheJamsilLight}) format('woff'),
         url(${TheJamsilLight}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'TheJamsilRegular';
    font-weight: 300;
    font-style: normal;
    src: url('TheJamsilRegular');
    src: url(${TheJamsilRegular}) format('embedded-opentype'),
         url(${TheJamsilRegular}) format('woff2'),
         url(${TheJamsilRegular}) format('woff'),
         url(${TheJamsilRegular}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'TheJamsilBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}
`;
