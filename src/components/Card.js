import React from 'react'
import {FcLike} from "react-icons/fc";

const Card = (props) => {

  console.log("Card entered");

  let course=props.course;
  return (
    <div>
      <div>
        {/* <img src='{course.image.url}'/>    --------> images should not be passed like this  */}
        <img src={course.image.url}/>
      </div>

      <div>
        <button>
          <FcLike/>
        </button>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
      
    </div>
    
  )
  
}

export default Card