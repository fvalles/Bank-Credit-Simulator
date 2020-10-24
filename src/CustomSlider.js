import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function CustomSlider({ min, max }) {
  return <Slider min={min} max={max} />
}

CustomSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}
