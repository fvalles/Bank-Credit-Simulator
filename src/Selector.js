import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './TitleContainer'
import CustomSlider from './CustomSlider'
import './Selector.css'

export default function Selector({
  inputCredit,
  sliderCredit,
  minCreditValue,
  maxCreditValue,
  onInputChange,
  onInputBlur,
  onSliderChange,
}) {
  return (
    <>
      <TitleContainer
        label="MONTO TOTAL"
        onChange={onInputChange}
        credit={inputCredit}
        onBlur={onInputBlur}
      />
      <div className="slider-container">
        <CustomSlider
          credit={sliderCredit}
          min={minCreditValue}
          max={maxCreditValue}
          onChange={onSliderChange}
        />
      </div>
    </>
  )
}

Selector.propTypes = {
  inputCredit: PropTypes.number.isRequired,
  sliderCredit: PropTypes.number.isRequired,
  minCreditValue: PropTypes.number.isRequired,
  maxCreditValue: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
}
