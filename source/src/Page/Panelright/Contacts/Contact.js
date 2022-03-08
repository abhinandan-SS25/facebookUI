import React from "react";

const Contact = ({image, title}) => {
    return (
        <div className="contact">
            <div className="profile_pic">
                <img src={image} alt=""/>
            </div>
            <div className="profile_name">
                {title}
            </div>
        </div>
    )
}

export default Contact;