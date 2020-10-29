import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function CustomSlider({ credit, min, max, onChange }) {
  return <Slider min={min} max={max} onChange={onChange} value={credit} />
}

CustomSlider.propTypes = {
  credit: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
