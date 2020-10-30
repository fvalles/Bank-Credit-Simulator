import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import numeral from 'numeral'
import 'numeral/locales/es'

export default function SliderLabels({ min, max, currency }) {
  numeral.locale('es')
  let formattedMin = min
  let formattedMax = max
  if (currency) {
    numeral.defaultFormat('$ 0,0')
    formattedMin = numeral(min).format()
    formattedMax = numeral(max).format()
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
