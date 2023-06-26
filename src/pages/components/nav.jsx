import {useNavigate} from "react-router-dom";


export const NavBar = () =>{
  const navigate = useNavigate();
    
    return(
        <nav>
        <div style={{textAlign:"left",paddingLeft:"2rem",color:"red",fontSize:"1.4rem",backgroundColor:"white"}} >
          <h3 onClick={()=>navigate("/")} style={{width:"max-content",cursor:"pointer"}}>
            <span >
              My
            </span>
            <span style={{color:"blue"}}>
              Forum
            </span>
          </h3>
        </div>
      </nav>
    )
}