//contains Titie and date of picture as well as nasa logo
import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
        </div>
    )
}

export default Header;