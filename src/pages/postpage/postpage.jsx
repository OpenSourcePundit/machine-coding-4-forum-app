import { useContext } from "react";
import { MainContext } from "../../context/maincontext";
import {useParams} from "react-router-dom";

import "./postpage.css";

import { NavBar } from "../components/nav";
import { LeftSideBar } from "../components/leftsidebar";
import { RightSideBar } from "../components/rightsidebar";
import { Post } from "../components/post/post";

export const PostPage = () =>{
    let {posts,sortBy} = useContext(MainContext);
    const {ID} = useParams();
    console.log("idfromparam:",ID)

    return(
        <div className="container">
            {console.log("container")}
            <NavBar/>
            <LeftSideBar/>
            <main className="main">
                <div className="post-heading">
                    {sortBy==="latest"?"LatestPosts":"Trending Posts"}
                </div>
                <div className="post-box">                   
                    <Post post={posts.find((post)=>post.postId===ID)} page={"post"} />
                </div>
            </main>
            <RightSideBar/>
        </div>
    )
}