import { useState, useEffect } from "react"
import axios from "axios"

const useCourse = id => {
    
    const [course_state, setState] = useState({}) // Creating a state called course_state with empty object

    useEffect(() => {
        //console.log("Usinng useEffect hook");
        //axios.get('https://my-json-server.typicode.com/veronicanerak/json-db/cursos/4')  static
        //console.log(match.params)
        axios.get(`https://my-json-server.typicode.com/veronicanerak/json-db/cursos/${id}`) //dynamic using template string
          .then(response => setState(response.data))
      }, []) // [] empty as second parameter to let the component knows that this component will be updated only the first time. It emuluates the componentDidMount which runs only the first time. 

      return course_state
}

export default useCourse