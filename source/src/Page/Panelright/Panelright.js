import React from "react";
import "./Panelright.css"
import Suggested from "./Suggested/Suggested";
import Contacts from "./Contacts/Contacts"

const Panelright = () => {
    return (
        <div id="panelright">
            <Suggested/>
            <Contacts/>
        </div>
    )
}

export default Panelright