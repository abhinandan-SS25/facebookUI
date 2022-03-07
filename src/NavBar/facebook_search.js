import React from "react";
import {BsFacebook} from "react-icons/bs";
import {RiSearch2Line} from "react-icons/ri";
import "./navbar.css";

const facebook_search = () => {
    return (
        <div id="facebook_search">
            <div id="f_icon">
                <BsFacebook/>
            </div>
            <div id="f_search">
            <div id="s_input">
                <RiSearch2Line/>
                <input type="text" placeholder="Search facebook"></input> 
            </div>
            </div>
        </div>
    )
};

export default facebook_search;

