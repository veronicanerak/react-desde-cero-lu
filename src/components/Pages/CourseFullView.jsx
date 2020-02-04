import React, { useState } from "react"



// match => to get the params comming from the path URL
const CourseFullView = ({ match }) => {

    const [course_state, setState] = useState({  // state= it's the state, setState = it's the callback, we are saving in an array [ attrib1, attrib2]
      id: 1,
      title: "React desde cero",
      image: "https://wallpapercave.com/wp/Q89pEav.jpg",
      price: 30,
      professor: "Beto Quiroga"
    })
    
    // console.log(course_state);
    const changeCourseTitle = (text) => { //In order to update the state (course_state) setState has to be used
      setState({
        ...course_state, // recover the status (course_state), only title attribute is overwritten.
        title: text
      })
    }

    return (
        <div className="ed-grid m-grid-3">
            {
                course_state ? (
                    <>
                        <h1 className="m-cols-3">Course Name: { course_state.title }</h1>
                        <img className="m-cols-1" src={ course_state.image } alt= { course_state.title } />
                        <p className="m-cols-2">Professor: { course_state.professor }</p>
                        <button onClick={ changeCourseTitle.bind(this, "Go desde cero") }>Change Course Title</button>
                    </>
                )
                : (
                    <h1>The course doesn't exist.</h1>
                )
            }
        </div>
    )
}

export default CourseFullView