import "./rightsidebar.css";
import {useContext, useState} from "react";
import { MainContext } from "../../context/maincontext";

export const RightSideBar = () =>{
    const {sortBy,setSortBy} = useContext(MainContext);

    return(
        <div className="sidebar2">
            <div className="main-div">
                SortBy:
            </div>
            <div className="main-div">
                <div className="sortby">
                    {sortBy==="latest"?"Show Trending Posts":"Show Latest Posts"}
                </div>
            </div>
        </div>
    )
}