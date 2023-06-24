import "./post.css";
import {useContext} from "react";
import { MainContext } from "../../../context/maincontext";

export const Post = ({post}) =>{
    const {forumData,setForumData} = useContext(MainContext);
    
    
    const handleUpvote = (type)=>{
        if(type==="increase"){
            let tempdata = {...forumData}
            tempdata.posts.filter((tpost)=>tpost.postId===post.postId).upvotes+=1;
        }
        else{
            let tempdata = {...forumData}
            tempdata.posts.filter((tpost)=>tpost.postId===post.postId).upvotes-=1;
        }

    }
    

    return(
        <div className="post-container">
            <div className="upvote-box">
                <div className="upvote-control" onClick={()=>handleUpvote("increase")}><i class="bi bi-caret-up-fill"></i></div>
                <div className="upvote-value">  {post.upvotes} </div>
                <div className="upvote-control" onClick={()=>handleUpvote("decrease")}><i class="bi bi-caret-down-fill"></i></div>

            </div>
            <div className="main-box">
                <div className="top-bx">
                    posted By @tanaypratap . 2minsago
                </div>
                <div className="post-bx">
                    Join Invactsabfsdwhnrtefvev dvj
                </div>
                <div className="tags-bx">
                 small large great going
                </div>
                <div className="desc-bx">
                posted By @tanaypratap . 2minsago
Join Invactsabfsdwhnrtefvev dvj
small large great going
                </div>
                <br/>
                <div className="button-bx">
                    <div className="buttons"><i class="bi bi-chat-dots"></i></div>
                    <div className="buttons"><i class="bi bi-share-fill"></i></div>
                    <div className="buttons"><i class="bi bi-bookmark"></i></div>

                </div>
            </div>

        </div>
    )
}