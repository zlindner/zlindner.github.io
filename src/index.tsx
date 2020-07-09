import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

/**
 * Global styles automatically applied throughout the app through the below
 * <GlobalStyles /> component.
 */
const GlobalStyles = createGlobalStyle`
    /* SF Display Bold. Used for h1 tags. */
    @font-face {
        font-family: 'SF Display';
        font-weight: 700;
        src: url('https://sf.abarba.me/SF-UI-Display-Bold.otf');
    }

    /* SF Pro Regular. Used for all other text */
    @font-face {
        font-family: 'SF Text';
        font-weight: 400;
        src: url('https://sf.abarba.me/SF-UI-Text-Regular.otf');
    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 50px;
        font-family: 'SF Text';
        font-weight: 400;
        user-select: none;
        box-sizing: border-box;
        overflow: hidden;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    a {
        color: #000;
        text-decoration: none;
        outline: none;
    }

    h1 {
        font-family: 'SF Display';
        font-weight: 700;
        font-size: 36pt;
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    span {
        color: #515151;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />

        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
