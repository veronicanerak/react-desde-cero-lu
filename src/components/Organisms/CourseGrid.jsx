import React from "react"
import CourseCard from "../Molecules/CourseCard"

const courses = [
    {
      "id": 1,
      "title": "React desde cero",
      "image": "https://wallpapercave.com/wp/Q89pEav.jpg",
      "price": 30,
      "professor": "Beto Quiroga"
    }, 
    {
      "id": 2,
      "title": "HTML desde cero",
      "image": "https://marketingweek.imgix.net/content/uploads/2018/11/23153217/christmas.png",
      "price": 50,
      "professor": "Josue Martinez"
    }, 
    {
      "id": 3,
      "title": "Drupal desde cero",
      "image": "https://image.shutterstock.com/image-photo/decorated-christmas-tree-on-blurred-260nw-1201088539.jpg",
      "price": 10,
      "professor": "Alexyis Lozada"
    },
    {
      "id": 4,
      "title": "CSS desde cero",
      "image": "https://cdn.pixabay.com/photo/2014/12/21/07/50/christmas-card-574742__340.jpg",
      "price": 60,
      "professor": "Alvaro Felipe"
    }
  ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { courses.map( course => (
            <CourseCard 
                key={course.id}
                id= {course.id}
                title={course.title}
                image={course.image}
                price={course.price}
                professor={course.professor}
            />
        ) ) }
    </div>
)

export default CourseGrid