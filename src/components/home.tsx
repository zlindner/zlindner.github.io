import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <section>
            <span>Hi, my name is</span>

            <h1 style={{ margin: '20px 0' }}>Zachary Lindner.</h1>

            <span style={{ display: 'block', width: '60%' }}>
                I'm a recent computer science graduate with a passion for full stack development and natural language
                processing.
            </span>
        </section>
    );
};

export default Home;
