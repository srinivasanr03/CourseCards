import React from 'react'
import Card from './Card';

const Cards = (props) => {
  
  let courses = props.courses;

  function getCourses(){
    let allCourses=[];

    Object.values(courses).forEach( (array) =>{
      array.forEach((courseData) =>{
        allCourses.push(courseData);
      })
    })
    return allCourses;
    
  }
  
  return (
    <div>
      {/* we can apply map() only for arrays , we should make note of how our data is being provided (in array form or any other form) */}
      {/* we can observe that we are not given a single arrays , there are multiple arrays , so we have to make use of additional things along with map() function  */}

      {
        getCourses().map( (course)=>{

          <Card key={course.id} course={course}/>

        })
      }
       
    </div>
  )
}

export default Cards