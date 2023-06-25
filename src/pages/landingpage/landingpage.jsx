import "./landingpage.css";

import {useContext} from "react";
import { MainContext } from "../../context/maincontext";

import { NavBar } from "../components/nav";
import { LeftSideBar } from "../components/leftsidebar";
import { RightSideBar } from "../components/rightsidebar";
import { Post } from "../components/post/post";

export const LandingPage =() =>{
    let {posts,sortBy} = useContext(MainContext);

    return(
        <div className="container">
            <NavBar/>
            <LeftSideBar/>
            <main className="main">
                <div className="post-heading">
                    {sortBy==="latest"?"LatestPosts":"Trending Posts"}
                </div>
                <div className="post-box">
                    {posts.map((post)=> <Post post={post} key={post.postId} />)}

                </div>
            </main>
            <RightSideBar/>
        </div>
    )
}