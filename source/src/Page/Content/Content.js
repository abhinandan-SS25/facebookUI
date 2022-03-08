import React from "react";
import "./content.css";
import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div id="content">
            <Stories/>
            <Posts/>
        </div>
    )
}

export default Content