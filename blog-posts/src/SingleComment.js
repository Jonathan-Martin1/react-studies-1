import React from 'react';


const SingleComment = (props) => {
 return(
      <div className="comment">
     <a href='/' className='avatar'>
     <img src={props.image} alt=''/>
     </a>
     <div className="content">
     <a href='/' className='author'>
       {props.language}
     </a>
     <div className="metadata">
     <span className='date'>
       {props.date}
     </span>
     </div>
     <div className="text">
       {props.message}
     </div>
    </div>
   </div>
 )
}

export default SingleComment;