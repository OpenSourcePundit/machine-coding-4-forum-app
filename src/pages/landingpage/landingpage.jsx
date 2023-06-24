import "./landingpage.css";

import { NavBar } from "../components/nav";
import { LeftSideBar } from "../components/leftsidebar";
import { RightSideBar } from "../components/rightsidebar";

export const LandingPage =() =>{

    return(
        <div className="container">
            <NavBar/>
            <LeftSideBar/>
            <main className="main">

            </main>
            <RightSideBar/>
        </div>
    )
}