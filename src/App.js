import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from './CourseGrid';
import CourseFullView from "./CourseFullView"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component= { Banner} />
      <Route path="/courses/:course_id" component={ CourseFullView } />
      <Route path="/courses" component= { CourseGrid } />      
      <Route path="/form-contact" component= { () => <Formulario form_name="Contact Us" /> } />
      <Route component={()=> (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Page not found</span>
        </div>
      )} />
    </Switch>
  </Router>
)
 
export default App;
