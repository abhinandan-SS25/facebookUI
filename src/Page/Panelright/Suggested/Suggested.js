import React from "react";
import "./suggested.css";
import {IoPeopleCircle} from "react-icons/io5"

const Suggested = () => {
    return (
        <div id="suggested">
            <p>Suggested</p>
            <div id="groups">
                <div id="group_pic">
                    <p><span><IoPeopleCircle/> Groups</span></p>
                    <p>New ways to find and join communities</p>
                    <p><button>Find Your Groups</button></p>
                </div>
                <div id="group_info">
                    <div id="j_p">
                        <img id="img1" src="https://yt3.ggpht.com/yc8u3QnOyb0iZ4eIumSgQgxRbRt_hgOg_BAwnsV0juT5Z0spruZ0csgwPWZwzD3vx02_7dzA=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                        <img id="img2" src="https://www.pinkvilla.com/imageresize/abhinav-shukla-on-sleeping-while-driving-main.jpg?width=752&format=webp&t=pvorg" alt=""/>
                        <img id="img3" src="https://pbs.twimg.com/profile_images/1352716182416191488/cbPXofyC_400x400.jpg" alt=""/>
                    </div>
                    <div id="i_p">
                        Jack and 9 friends joined Groups
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggested;