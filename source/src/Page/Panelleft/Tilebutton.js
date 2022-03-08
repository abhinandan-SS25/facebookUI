import React from "react";
import "./Panelleft.css";

const Tilebutton = ({text, icon}) => {
    return (
        <div className="lefttile">
                    <div className="symbol">
                        {icon}
                    </div>
                    <div className="text">
                        {text}
                    </div>
                </div>
    )
}

export default Tilebutton;