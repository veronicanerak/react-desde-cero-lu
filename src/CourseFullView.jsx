import React from "react"

const courses = [
    {
      "id": 1,
      "title": "React desde cero",
      "image": "https://wallpapercave.com/wp/Q89pEav.jpg",
      "price": 30,
      "profesor": "Beto Quiroga"
    }, 
    {
      "id": 2,
      "title": "HTML desde cero",
      "image": "https://marketingweek.imgix.net/content/uploads/2018/11/23153217/christmas.png",
      "price": 50,
      "profesor": "Josue Martinez"
    }, 
    {
      "id": 3,
      "title": "Drupal desde cero",
      "image": "https://image.shutterstock.com/image-photo/decorated-christmas-tree-on-blurred-260nw-1201088539.jpg",
      "price": 10,
      "profesor": "Alexyis Lozada"
    },
    {
      "id": 4,
      "title": "CSS desde cero",
      "image": "https://cdn.pixabay.com/photo/2014/12/21/07/50/christmas-card-574742__340.jpg",
      "price": 60,
      "profesor": "Alvaro Felipe"
    }
]

// match => to get the params comming from the path URL
const CourseFullView = ({ match }) => {

    const CurrentCourse = courses.filter( course => course.id === parseInt(match.params.course_id) )[0]

    return (
        <div className="ed-grid m-grid-3">
            {
                CurrentCourse ? (
                    <>
                        <h1 className="m-cols-3">Course Name: { CurrentCourse.title }</h1>
                        <img className="m-cols-1" src={ CurrentCourse.image } alt= { CurrentCourse.title } />
                        <p className="m-cols-2">Profesor: { CurrentCourse.profesor }</p>
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