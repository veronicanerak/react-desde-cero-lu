import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseCard = ({id, title, image, price, professor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">      
      <Link to={`/courses/${id}`}>
        <img src={image} alt={ title } />
      </Link> 
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">       
        { title }       
      </h3> 
      <div>
        { `The professor is: ${professor}` }
      </div>     
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.edte.com">{ `$ ${price} USD` }</a>
      </div>
    </div>
  </article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No se encontro titulo",
  image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3080623.jpg",
  price: "--",
  professor: ""
}


export default CourseCard