import React from "react";
import {AiFillHome} from "react-icons/ai";
import {FiBell} from "react-icons/fi";
import {MdOutlineVideoLibrary, MdOutlinePeopleOutline} from "react-icons/md";
import {BsPersonCircle, BsShopWindow} from "react-icons/bs";
import {RiMessengerLine} from "react-icons/ri";
import "./navbar.css";
import {useState} from "react";

const Facebook_icons = () => {

    let [color1, setColor1] = useState({color:"grey",border:"hidden"});
    let [color2, setColor2] = useState({color:"grey",border:"hidden"});
    let [color3, setColor3] = useState({color:"grey",border:"hidden"});
    let [color4, setColor4] = useState({color:"grey",border:"hidden"});
    let [color5, setColor5] = useState({color:"grey",border:"hidden"});
    let [color6, setColor6] = useState({color:"grey",border:"hidden"});

    return (
        <div id="facebook_icons">
            <a className="icon" onClick={()=>{setColor1({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});setColor2({color:"grey",border:"hidden"});setColor3({color:"grey",border:"hidden"});setColor4({color:"grey",border:"hidden"});setColor5({color:"grey",border:"hidden"});setColor6({color:"grey",border:"hidden"});}} style={{color:color1.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color1.border}}><AiFillHome/></a>
            <a className="icon" onClick={()=>{setColor1({color:"grey",border:"hidden"});setColor2({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});setColor3({color:"grey",border:"hidden"});setColor4({color:"grey",border:"hidden"});setColor5({color:"grey",border:"hidden"});setColor6({color:"grey",border:"hidden"});}} style={{color:color2.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color2.border}}><FiBell/></a>
            <a className="icon" onClick={()=>{setColor1({color:"grey",border:"hidden"});setColor2({color:"grey",border:"hidden"});setColor3({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});setColor4({color:"grey",border:"hidden"});setColor5({color:"grey",border:"hidden"});setColor6({color:"grey",border:"hidden"});}} style={{color:color3.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color3.border}}><MdOutlineVideoLibrary/></a>
            <a className="icon" id="profile"><BsPersonCircle/></a>
            <a className="icon" onClick={()=>{setColor1({color:"grey",border:"hidden"});setColor2({color:"grey",border:"hidden"});setColor3({color:"grey",border:"hidden"});setColor4({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});setColor5({color:"grey",border:"hidden"});setColor6({color:"grey",border:"hidden"});}} style={{color:color4.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color4.border}}><BsShopWindow/></a>
            <a className="icon" onClick={()=>{setColor1({color:"grey",border:"hidden"});setColor2({color:"grey",border:"hidden"});setColor3({color:"grey",border:"hidden"});setColor4({color:"grey",border:"hidden"});setColor5({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});setColor6({color:"grey",border:"hidden"});}} style={{color:color5.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color5.border}}><MdOutlinePeopleOutline/></a>
            <a className="icon" onClick={()=>{setColor1({color:"grey",border:"hidden"});setColor2({color:"grey",border:"hidden"});setColor3({color:"grey",border:"hidden"});setColor4({color:"grey",border:"hidden"});setColor5({color:"grey",border:"hidden"});setColor6({color:"rgb(0, 153, 255)",border:"hidden hidden solid hidden"});}} style={{color:color6.color, borderWidth :8, borderColor:"rgb(0, 153, 255)", borderStyle:color6.border}}><RiMessengerLine/></a>
        </div>
    )
};

export default Facebook_icons;