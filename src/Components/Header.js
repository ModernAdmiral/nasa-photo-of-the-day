//contains Titie and date of picture as well as nasa logo
import React from "react";
import styled from "styled-components"

const HeaderWrapper = styled.div`
    text-align: center;
    font-family: 'Roboto Mono', monospace;

`;

const Title = styled.h1`
    color: darkblue;
    font-size: 3rem;
    margin-bottom: 1rem;
`;

// const Date = styled.input`
//     color: grey;
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
// `;

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Title>{props.title}</Title>

            <input type="date"></input>

        </HeaderWrapper>
    )
}

export default Header;