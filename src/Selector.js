import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './TitleContainer'
import CustomSlider from './CustomSlider'
import './Selector.css'

export default function Selector({ onChange, minCreditValue, maxCreditValue }) {
  return (
    <>
      <TitleContainer label="MONTO TOTAL" onChange={onChange} />
      <div className="slider-container">
        <CustomSlider min={minCreditValue} max={maxCreditValue} />
      </div>
    </>
  )
}

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  minCreditValue: PropTypes.number.isRequired,
  maxCreditValue: PropTypes.number.isRequired,
}
