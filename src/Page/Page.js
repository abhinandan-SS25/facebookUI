import React from "react";
import Panelleft from "./Panelleft/Panelleft"
import Panelright from "./Panelright/Panelright"
import Content from "./Content/Content"
import "./page.css"

const Page = () => {
    return (
        <div id="page">
            <Panelleft/>
            <Content/>
            <Panelright/>
        </div>
    )
}

export default Page;