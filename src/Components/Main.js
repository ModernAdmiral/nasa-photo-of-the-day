//Parent container for our content
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Picture from "./Picture";
import axios from 'axios';
import styled from "styled-components";


const MainWrapper = styled.div`
background-color: lightblue;
`

const Main = (props) => {
    const [data, setData] = useState([])


    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?date=${props.date}&api_key=tKxxo9IAPow3HtZay1GSsdRf9B0mvxbR4mGbfMMT`)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log("the data was not returned", error);
            })
    }, []);

     return(
         <MainWrapper>
        <Header 
            title={data.title}
            date={data.date}
        />
        <Picture 
            source={data.url}
            explanation={data.explanation}
            media_type={data.media_type}
        />
        </MainWrapper>
     )
}

export default Main

