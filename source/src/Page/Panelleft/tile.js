import React from "react";
import "./Panelleft.css";
import Thumbnail from "./Thumbnail";

const Tile = ({text, picture}) => {
    return (
        <div className="lefttile">
                    <div className="symbol">
                        <Thumbnail image={picture}/>
                    </div>
                    <div className="text">
                        {text}
                    </div>
                </div>
    )
}

export default Tile;