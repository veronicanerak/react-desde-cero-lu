import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
  <article class="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">      
      <img src={image} alt={ title } />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">       
        { title }       
      </h3> 
      <div>
        { `El profesor es: ${profesor}` }
      </div>     
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.edte.com">{ `$ ${price} USD` }</a>
      </div>
    </div>
  </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro titulo",
  image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3080623.jpg",
  price: "--",
  profesor: ""
}


export default Curso