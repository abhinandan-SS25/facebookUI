import React from "react";
import Post from "./Post";
import Addpost from "./Addpost";
import Moreposts from "./Moreposts";

const Posts = () => {
    return(
        <div id="posts">
            <Addpost/>
            <Post 
                text="Enjoying some delicious coffee in the morning"
                picture="https://static.toiimg.com/thumb/84855613.cms?width=680&height=512&imgsize=230846"
                poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5bd_B9k-YNaN8vsx7nN_jf81PGIOYgtjHA&usqp=CAU"
                detail="Rod Mahajan"
                time="2 mins"
            />
            <Post 
                text="Great game today!!! Thanks for All the support guys!!"
                picture="https://imgnew.outlookindia.com/public/uploads/articles/2022/1/4/Thakur-Wanderers-Celeb-AP.jpg"
                poster="https://static.toiimg.com/thumb/msid-85241068,width-400,resizemode-4/85241068.jpg"
                detail="Shardul Thakur"
                time="5 mins"
            />
            <Post 
                text="Just Chillin"
                picture="https://im.rediff.com/movies/2020/oct/16abhinav-shukla1.jpg?w=670&h=900"
                poster="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/rubina-abhinav-main_0.jpg?itok=hj1fv0eM"
                detail="Abhinav Shukla"
                time="6 hrs"
            />
            <Post 
                text="#Nature Just the cool breeze and a beautiful Sunset!"
                picture="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80"
                poster="https://www.verywellmind.com/thmb/0Ja7TU0dFwQhwR2UUCysIxZzPNU=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/173604603-56a793443df78cf772974a85.jpg"
                detail="Erika Jessi"
                time="Yesterday"
            />
            <Post 
                text="The new season starts - Glory Awaits warriors!!!!!"
                picture="https://cdn.cloudflare.steamstatic.com/steam/apps/304390/ss_8da959707a8aef0ec6831823d4107c5dabd50c1c.1920x1080.jpg?t=1643290052"
                poster="https://cdn.akamai.steamstatic.com/steam/apps/304390/capsule_616x353.jpg?t=1631199784"
                detail="For Honor Game"
                time="3rd March 2022"
            />
            <Moreposts />
        </div>
    )
}
export default Posts;