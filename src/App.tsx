import React from 'react';
import styled from 'styled-components';
import Socials from './components/socials';
import Navigation from './components/navigation';

const Wrapper = styled.div`
    width: calc(100vw - 250px);
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    box-sizing: border-box;
`;

const Content = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
    margin-top: 20px;
    background-color: #000;
`;

const Square = styled.div`
    width: 50vh;
    height: 50vh;
    position: absolute;
    top: -100px;
    right: -100px;
    border: 2px solid #000;
    z-index: -1;
`;

const App = () => {
    return (
        <Wrapper>
            <span>Hi, my name is</span>

            <h1 style={{ margin: '20px 0' }}>Zachary Lindner.</h1>

            <span style={{ display: 'block', maxWidth: '600px' }}>
                I'm a recent computer science graduate with a passion for full stack development and natural language
                processing.
            </span>

            <Content>
                <Navigation />
                <Square />
            </Content>

            <Socials />
        </Wrapper>
    );
};

export default App;
