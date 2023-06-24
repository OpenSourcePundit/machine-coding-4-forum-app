import "./landingpage.css";

import {useContext} from "react";
import { MainContext } from "../../context/maincontext";

import { NavBar } from "../components/nav";
import { LeftSideBar } from "../components/leftsidebar";
import { RightSideBar } from "../components/rightsidebar";
import { Post } from "../components/post/post";

export const LandingPage =() =>{
    let {posts} = useContext(MainContext);

    return(
        <div className="container">
            <NavBar/>
            <LeftSideBar/>
            <main className="main">
                <div className="post-heading">
                    LAtestPost
                </div>
                <div className="post-box">
                    {posts.map((post)=> <Post post={post}/>)}

                </div>
            </main>
            <RightSideBar/>
        </div>
    )
}