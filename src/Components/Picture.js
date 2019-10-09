// Contains picture and explination
import React from "react";

const Picture = (props) => {

     return(
        <div>
            <img alt={props.media_type} src={props.source}></img>
            <p>{props.explanation}</p>
        </div>
     )
}

export default Picture

