import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"


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
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://wallpaperaccess.com/full/1474059.jpg" alt="test" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Christmas Time</p>
        <p> My favorite time of the year </p>
        <a href="#" class="button">Smile</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">  
  {
    cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} /> )
  }
</div>
</>
)

export default App;
