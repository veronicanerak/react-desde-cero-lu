import React, { Component } from "react"
import CourseCard from "../Molecules/CourseCard"
import axios from "axios"

class CourseGrid  extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/veronicanerak/json-db/cursos')
    .then(response => this.setState({
      courses: response.data
    }))
  }

  render() {

    const { courses } = this.state

    return (
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
  }
}

export default CourseGrid