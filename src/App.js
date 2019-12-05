import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import Banner from "./Banner"
import Formulario from "./Formulario"

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://wallpapercave.com/wp/Q89pEav.jpg",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, 
  {
    "title": "HTML desde cero",
    "image": "https://marketingweek.imgix.net/content/uploads/2018/11/23153217/christmas.png",
    "price": 50,
    "profesor": "Josue Martinez"
  }, 
  {
    "title": "Drupal desde cero",
    "image": "https://image.shutterstock.com/image-photo/decorated-christmas-tree-on-blurred-260nw-1201088539.jpg",
    "price": 10,
    "profesor": "Alexyis Lozada"
  },
  {
    "title": "CSS desde cero",
    "image": "https://cdn.pixabay.com/photo/2014/12/21/07/50/christmas-card-574742__340.jpg",
    "price": 60,
    "profesor": "Alvaro Felipe"
  }
]


const App = () => (
<>
  <Banner />
  <Formulario name="alberto Bounjem" email="alberto.bou@gmail.com" form_name="Contact Us" />

  <div className="ed-grid m-grid-3">  
    {
      cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} /> )      
    }
  </div>
</>
)

export default App;
