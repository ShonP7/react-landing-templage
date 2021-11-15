import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

body{
    background-color: #03091f;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem
    font-weight: 400;
    color: white;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}

p{
    line-height: 2rem;
}

.Before{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    position: relative;
    padding-left: 3rem;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 35px;
        height: 2px;
        background-color: #395FF6;

    }
}

.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
}

`;

export default GlobalStyle;