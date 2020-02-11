import axios from "axios"
import React, { useEffect, useState } from "react"
import useCourse from "../CustomHooks/useCourse"



// match => to get the params comming from the path URL
const CourseFullView = ({ match }) => {

  /* Commented for learning reasons
  const [course_state, setState] = useState({  // course_state= it's the state (it can be any name for this variable), setState = it's the callback, we are saving in an array [ attrib1, attrib2]
    id: 1,
    title: "React desde cero",
    image: "https://wallpapercave.com/wp/Q89pEav.jpg",
    price: 30,
    professor: "Beto Quiroga"
  })
  */

  // Creating different states
  //const [course_state, setState] = useState({}) // Creating a state called course_state with empty object
  const [comment, setComment] = useState("No comments yet.")  // Creating a state called comment with a string  

  const course_state = useCourse(match.params.course_id)

  // console.log(course_state);
  /* Commented for learning reasons
  const changeCourseTitle = (text) => { //In order to update the state (course_state) setState has to be used
    setState({
      ...course_state, // recover the status (course_state), only title attribute is overwritten.
      title: text
    })
  }
  */

  const myComment = event => {
    setComment(event.target.value)
  }

  return (
    <div className="ed-grid m-grid-3">
      {
        course_state ? (
          <div className="ed-grid">
            <div className="l-block">
              <h1 className="m-cols-3">Course Name: {course_state.title}</h1>
              <img className="m-cols-1" src={course_state.image} alt={course_state.title} />
              <p className="m-cols-2">Professor: {course_state.professor}</p>
              <button /*onClick={ changeCourseTitle.bind(this, "Go desde cero") }*/>Change Course Title</button>
            </div>
            <div className="ed-grid comment">
              <h2>Leave a comment</h2>
              <input type="text" placeholder="Leave a message ..." onChange={myComment.bind(this)}/>
              <p>{comment}</p>
            </div>
          </div>
        )
          : (
            <h1>The course doesn't exist.</h1>
          )
      }
    </div>
  )
}

export default CourseFullView