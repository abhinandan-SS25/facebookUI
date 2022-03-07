import React from "react";
import "./Panelleft.css";
import {MdEvent, MdExpandMore} from "react-icons/md";
import {HiBookmark} from "react-icons/hi";
import {SiFacebookgaming, SiClockify} from "react-icons/si";
import {BiHeartCircle} from "react-icons/bi";
import {IoHelpCircle} from "react-icons/io5";
import {RiSettings5Fill} from "react-icons/ri";
import {CgDetailsMore} from "react-icons/cg";
import Tilebutton from  "./Tilebutton";
import Tile from "./tile";


const Panelleft = () => {
    return (
        <div id="panelleft">
            <div id="home">
                <div id="l_div">
                    Home
                </div>
                <div id="r_div">
                    Create 
                </div>
            </div>
            <div id="tiles">
                <Tile text="The Foodys" picture="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"/>
                <Tile text="The Mustang Group" picture="https://i.redd.it/x15o54kud7p11.jpg"/>
                <Tile text="For Honor" picture="https://upload.wikimedia.org/wikipedia/en/d/d5/For_Honor_cover_art.jpg"/>
                <Tilebutton text="Events" icon={<MdEvent color="#ff0051"/>}/>
                <Tilebutton text="Saved" icon={<HiBookmark color="purple"/>}/>
                <Tilebutton text="Gaming" icon={<SiFacebookgaming color="#00bfff"/>}/>
                <Tilebutton text="Fundraisers" icon={<BiHeartCircle color="red"/>}/>
                <Tilebutton text="Memories" icon={<SiClockify color="blue"/>}/>
                <Tilebutton text="Help & Support" icon={<IoHelpCircle color="grey"/>}/>
                <Tilebutton text="Setings & Privacy" icon={<span><RiSettings5Fill/></span>}/>
                <div className="lefttile">
                    <div className="symbol">
                        <span><CgDetailsMore color="gold"/></span>
                    </div>
                    <div id="st" className="text">
                        See More
                    </div>
                    <div id="seemore">
                        <MdExpandMore color="grey"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panelleft;