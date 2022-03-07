import React from "react";
import "./Panelleft.css";

const Thumbnail = ({image}) => {
    return  ( 
        <div id="thumbnail" style={{backgroundImage:`url(${image})`}}>
        </div>
    )
};

export default Thumbnail;