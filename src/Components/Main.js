//Parent container for our content
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Picture from "./Picture";
import axios from 'axios';


const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log("the data was not returned", error);
            })
    }, []);

     return(
         <div>
        <Header 
            title={data.title}
            date={data.date}
        />
        <Picture 
            source={data.url}
            explanation={data.explanation}
            media_type={data.media_type}
        />
        </div>
     )
}

export default Main

