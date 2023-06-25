import {Link} from "react-router-dom";
import "./leftsidebar.css";

export const LeftSideBar = () =>{

    return(
        <div className="sidebar1">
        <div className="nav-wrapper">
          <div className="pt-s black-color fw-semibold link-wrap">
            <Link className="link" to="../">                
              <span className="fw-bold"><i className="bi bi-house"></i> Home</span>
            </Link>
          </div>
          <div className="pt-s black-color fw-semibold link-wrap">
            <Link className="link" to="../">
              
              <span><i className="bi bi-house"></i> Explore</span>
            </Link>
          </div>
          <div className="pt-s black-color fw-semibold link-wrap">
            <Link className="link" to="../">
              
              <span><i className="bi bi-bookmark"></i> Bookmark</span>
            </Link>
          </div>
          <div className="pt-s black-color fw-semibold link-wrap">
            <Link className="link" to="../">                
              <span><i className="bi bi-person"></i> Profile</span>
            </Link>
          </div>
        </div>
    <div className="flex flex-space-between  username-box">
      <div className="grey-bg br-full width-xs height-xs   post-box-left" style={{ aspectRatio: 1 }}></div>
      <div className="flex">
        <div className="grey-bg br-full width-xl height-xl"></div>
          <div className="flex flex-column ml-xs">
            <div className="fw-bold">Tanay Pratap</div>
            <div className="fw-light grey-color">@tanaypratap</div>
            </div>
      </div>
      <div className="grey-color fw-bold">...</div>          
    </div>
    </div>
    )
}