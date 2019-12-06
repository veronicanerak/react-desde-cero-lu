import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from './CourseGrid';


const App = () => (
<>
  <Banner />
  <Formulario name="alberto Bounjem" email="alberto.bou@gmail.com" form_name="Contact Us" />
  <CourseGrid />  
</>
)

export default App;
