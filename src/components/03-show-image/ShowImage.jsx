import React from 'react'
import './ShowImage.scss'
import PropTypes from 'prop-types'

const ShowImage = ({ url, title }) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
      <h3>Consumiendo API Giphy - Gif Random</h3>
      <img className='card__image' src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

ShowImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default ShowImage
