import React from "react";
import "./stories.css";

const Story =({image, title, pimage}) => {
    return (
        <div className="story">
            <div className="story_cover">
                <img className="story_cover" src={image} alt=""/>
            </div>
            <div className="profile">
                <img className="profile_picture" src={pimage} alt=""/>
                <div className="name">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Story;