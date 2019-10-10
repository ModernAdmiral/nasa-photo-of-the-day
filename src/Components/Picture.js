// Contains picture and explination
import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
    text-align: center;
`

const ImgWrapper = styled.img`
    border-radius: 20px;
`

const Explanation = styled.p`
    margin-top: 2rem;
    width: 75%;
    margin-left: 12.5%;
    font-family: 'Rokkitt', serif;
    font-size: 1.5rem;

`

const Picture = (props) => {

     return(
        <ContentWrapper>
            <ImgWrapper alt={props.media_type} src={props.source}></ImgWrapper>
            <Explanation>{props.explanation}</Explanation>
        </ContentWrapper>
     )
}

export default Picture

