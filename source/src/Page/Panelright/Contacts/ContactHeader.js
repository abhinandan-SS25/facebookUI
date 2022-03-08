import React from "react";
import "./contacts.css"
import {MdMoreHoriz} from "react-icons/md"

const Contactheader = () => {
    return (
        <div id="contact_header">
            <div id="header">
                <p>Contacts</p>
            </div>
            <div id="header_icon">
                <MdMoreHoriz/>
            </div>
        </div>
    )
}

export default Contactheader;