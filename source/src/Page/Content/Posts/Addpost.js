import React from "react";
import "./posts.css";
import {BsCardImage} from "react-icons/bs"

const Addpost = () => {
    return (
        <div id="addpost">
            <div id="appost">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
            <div id="apost">
                <input type="text" placeholder="Add a post"></input>
            </div>
            <div id="aipost">
                <div><BsCardImage/></div>
            </div>
        </div>
    )
}

export default Addpost;