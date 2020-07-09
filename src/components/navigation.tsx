import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    list-style: outside none none;
`;

const Item = styled.li`
    color: #fff;
    display: inline-block;
`;

const items = ['home', 'skills', 'experience', 'projects'];

const Navigation = () => {
    return (
        <Wrapper>
            {items.map(item => (
                <Item key={`navigation_${item}`}>{item}</Item>
            ))}
        </Wrapper>
    );
};

export default Navigation;
