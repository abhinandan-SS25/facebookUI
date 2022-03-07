import React from "react";
import Contactheader from "./ContactHeader"
import Contact from "./Contact";
import "./contacts.css"

const Contacts = () => {
    return (
        <div id="contacts">
            <Contactheader/>
            <Contact image="https://yt3.ggpht.com/yc8u3QnOyb0iZ4eIumSgQgxRbRt_hgOg_BAwnsV0juT5Z0spruZ0csgwPWZwzD3vx02_7dzA=s900-c-k-c0x00ffffff-no-rj" title="Jack Hughman" />
            <Contact image="https://www.pinkvilla.com/imageresize/abhinav-shukla-on-sleeping-while-driving-main.jpg?width=752&format=webp&t=pvorg" title="Abhinav Shukla" />
            <Contact image="https://pbs.twimg.com/profile_images/1352716182416191488/cbPXofyC_400x400.jpg" title="Raja Das" />
            <Contact image="https://jetsxfactor.com/wp-content/uploads/2022/01/Eric-Mangini-Jets-Head-Coach.jpg" title="Eric Mangini"/>
            <Contact image="https://upload.wikimedia.org/wikipedia/commons/c/ca/AidenMcGeadyIreland.png" title="Aden Macgeney"/>
            <Contact image="https://c.ndtvimg.com/2020-01/9b3u91p_shweta-basu-prasad-instagram_625x300_21_January_20.jpg" title="Swetha Basu"/>
            <Contact image="https://c.ndtvimg.com/2021-11/5fi5sf9g_shardul-engagement-instagram_625x300_30_November_21.jpg" title="Shardul Thakur"/>
            <Contact image="https://images.news18.com/ibnlive/uploads/2021/07/1627395526_jasprit-bumrah.jpg" title="Jasprit Bumrah"/>
            <Contact image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK4wr1oRA3EX5uGtcSiEv_Ieli3Zf5AIIWw&usqp=CAU" title="All Contacts"/>
        </div>
    )
}

export default Contacts;