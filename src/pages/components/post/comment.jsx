
import "./comment.css";
export const Comment = ({comments}) =>{

    return(
        <div className="comment-container">            
            {comments.map((comment)=>{return(
                
                <div className="single-comment-container">
                  <div className="img-section"><img src={comment.picUrl} height="50" width="50" /></div>
                  <div className="comment-section-main">
                    <div className="username-section">
                      {comment.username}
                    </div>

                    <div className="button-section"></div>
                  </div>            
                </div>
            )
            })}
        </div>
    )
}