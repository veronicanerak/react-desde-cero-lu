import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"

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
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>
</>
)

export default App;
