import React from "react";
import Search from "./facebook_search";
import Icons from "./facebook_icons";
import Settings from "./facebook_settings";
import "./navbar.css"

const navbar = () => {
    return(
        <div id="navbar">
            <Search/>
            <Icons/>
            <Settings/>
        </div>
    )
};

export default navbar;