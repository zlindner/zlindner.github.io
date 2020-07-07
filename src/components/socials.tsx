import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    float: right;
    writing-mode: vertical-lr;
`;

const Item = styled.li`
    float: left;
    margin-bottom: 40px;

    :last-child {
        margin: 0;
    }

    & > a {
        font-family: 'SF Display';
        font-size: 14px;
        letter-spacing: 3px;
        font-weight: 700;
    }
`;

const items = [
    {
        name: 'github',
        url: 'https://github.com/zlindner'
    },
    {
        name: 'linkedin',
        url: 'https://linkedin.com/in/zachlindner'
    }
];

const Socials = () => {
    return (
        <Wrapper>
            {items.map(item => (
                <Item key={`socials_${item.name}`}>
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>
                        {item.name.toUpperCase()}
                    </a>
                </Item>
            ))}
        </Wrapper>
    );
};

export default Socials;
