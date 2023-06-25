import "./post.css";
import {useContext} from "react";
import { MainContext } from "../../../context/maincontext";

export const Post = ({post}) =>{
    const {forumData,setForumData} = useContext(MainContext);
    
    
    const handleUpvote = (type)=>{
        if(type==="increase"){
            
            let tempdata = {...forumData}
            tempdata.posts.find((tpost)=>tpost.postId===post.postId).upvotes+=1;
            setForumData(tempdata)

        }
        else{
            let tempdata = {...forumData}
            tempdata.posts.find((tpost)=>tpost.postId===post.postId).upvotes-=1;
            setForumData(tempdata)
        }

    }
    const bookmarkHandler = () =>{
        let tempdata = {...forumData}
        tempdata.posts.find((fpost)=>fpost.postId===post.postId).isBookmarked=!tempdata.posts.find((fpost)=>fpost.postId===post.postId).isBookmarked

        setForumData(tempdata);
    }

    return(
        <div  className="post-container">
            <div className="upvote-box">
                <div className="upvote-control" ><i onClick={()=>handleUpvote("increase")} className="bi bi-caret-up-fill"></i></div>
                <div className="upvote-value">  {post.upvotes} </div>
                <div className="upvote-control" ><i onClick={()=>handleUpvote("decrease")} className="bi bi-caret-down-fill"></i></div>

            </div>
            <div className="main-box">
                <div className="top-bx">
                    <div className="photo-container">
                        <img src={post.picUrl} alt="error" height="50" width="50"/>
                    </div>
                    < div style={{paddingTop:"12px"}}>  posted By @{post.username} . {post.createdAt} ago</div>
                </div>
                <div className="post-bx">
                   {post.post}
                </div>
                <div className="tags-bx">
                {post.tags.map((tag)=>{return(
                    <div className="tags-pills">
                        {tag}
                    </div>
                )})}
                </div>
                <div className="desc-bx">
                {post.postDescription}
                </div>
                <br/>
                <div className="button-bx">
                    <div className="buttons"><i className="bi bi-chat-dots"></i>  {post.comments.length}  </div>
                    <div className="buttons"><i className="bi bi-share-fill"></i></div>
                    <div className="buttons"><i onClick={()=>bookmarkHandler()} className={post.isBookmarked?"bi bi-bookmark-fill":"bi bi-bookmark"}></i></div>

                </div>
            </div>

        </div>
    )
}