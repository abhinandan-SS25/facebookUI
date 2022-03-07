import React from "react";
import "./stories.css";
import Story from "./Story"

const Stories = () => {
    return (
        <div id="stories">
            <div id="st">
                <div id="left">
                    Stories
                </div>
                <div id="right">
                    <span>See All</span>
                </div>
            </div>
            <div id="strs">
                <Story title="Add to story" image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" pimage="https://cdn1.iconfinder.com/data/icons/general-9/500/add-512.png" />
                <Story title="Shardul Thakur" image="https://staticg.sportskeeda.com/editor/2020/08/6ade9-15988553103041-800.jpg" pimage="https://static.toiimg.com/thumb/msid-81155337,width-400,resizemode-4/81155337.jpg" />
                <Story title="Abhinav Shukla" image="https://im.rediff.com/movies/2020/oct/16abhinav-shukla1.jpg?w=670&h=900" pimage="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/rubina-abhinav-main_0.jpg?itok=hj1fv0eM" />
                <Story title="Jasprit Bumrah" image="https://cricketaddictor.gumlet.io/wp-content/uploads/2022/01/jasprit-bumrah-scotland-1600-ap.jpg?compress=true&quality=80&w=800&dpr=2.6" pimage="https://mumbaimirror.indiatimes.com/thumb/msid-72908181,width-1200,height-900,resizemode-4/.jpg" />
                <Story title="Erika Jessi" image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80" pimage="https://www.verywellmind.com/thmb/0Ja7TU0dFwQhwR2UUCysIxZzPNU=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/173604603-56a793443df78cf772974a85.jpg" />
            </div>
        </div>
    )
}

export default Stories;
