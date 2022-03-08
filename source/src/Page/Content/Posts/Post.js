import React from "react";
import "./post.css";
import {MdOutlineExpandMore, MdPublic, MdExpandLess} from "react-icons/md";
import {AiTwotoneLike, AiFillPicture} from "react-icons/ai";
import {FaCommentAlt} from "react-icons/fa";
import {IoMdShareAlt} from "react-icons/io"
import {BiLike, BiGroup} from "react-icons/bi";
import {BsEmojiHeartEyesFill} from "react-icons/bs";

const Post = ({text,picture,poster,detail,time}) => {

    const tol = [<MdPublic/>, <BiGroup/>]
    let to;
    (Math.random()>0.5)? to = tol[0] : to = tol[1];

    const l = Math.floor((Math.random())*10) + 1;

    return (
        <div className="post">
            <div className="post_header">
                <div className="poster">
                    <img src={poster} alt="" />
                </div>
                <div className="post_det">
                    <p>{detail}</p>
                    <p className="time">{time} - {to}</p>
                </div>
                <div className="more">
                    <MdOutlineExpandMore color="grey" />
                </div>
            </div>
            <div className="post_body">
                <div className="post_text">
                    {text}
                </div>
                <div className="post_picture">
                    <img src={picture} alt="" />
                </div>
                <div className="actions">
                    <div className="post_action">
                        <span><AiTwotoneLike color="grey" size={22}/>  <span style={{paddingLeft:8}}>Like</span></span>
                        <span><FaCommentAlt color="grey" size={18}/>  <span style={{paddingLeft:8}}>Comment</span></span>
                        <span><IoMdShareAlt color="grey" size={25}/>  <span style={{paddingLeft:8}}>Share</span></span>
                    </div>
                    <div className="poster">
                        <img src={poster} alt="" />
                    </div>
                    </div>
            </div>
            <div className="post_footer">
                <div className="stats">
                    <div className="stat_view">
                        <BiLike/> {l}k
                    </div>
                    <div className="comments">
                        Top comments <MdExpandLess/>
                    </div>
                </div>
                <div className="comment_on">
                    <div className="poster">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </div>
                    <div className="post_comment">
                        <input className="comment" placeholder="Write a comment"></input>
                        <div className="add_com">
                            <AiFillPicture  size="25" color="grey"/>
                        </div>
                        <div className="add_com">
                            <BsEmojiHeartEyesFill color="grey"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post