import React from 'react'
import PropTypes from 'prop-types'
import './SliderLabels.css'

export default function SliderLabels({ min, max, currency }) {
  let formattedMin
  let formattedMax
  if (currency) {
    formattedMin = `${currency} ${min}`
    formattedMax = `${currency} ${max}`
  } else {
    formattedMin = min
    formattedMax = max
  }
  return (
    <div className="labels-container" style={currency ? { width: '100%' } : { width: '85%' }}>
      <p>{formattedMin}</p>
      <p>{formattedMax}</p>
    </div>
  )
}

SliderLabels.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  currency: PropTypes.string,
}

SliderLabels.defaultProps = {
  currency: null,
}
