import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './TitleContainer'
import CustomSlider from './CustomSlider'
import SliderLabels from './SliderLabels'
import './Selector.css'

export default function Selector({
  currency,
  inputValue,
  label,
  maxValue,
  minValue,
  onInputChange,
  onInputBlur,
  onSliderChange,
  sliderCredit,
}) {
  return (
    <>
      <TitleContainer
        currency={currency}
        label={label}
        onChange={onInputChange}
        value={inputValue}
        onBlur={onInputBlur}
      />
      <div className="slider-container">
        <CustomSlider
          credit={sliderCredit}
          max={maxValue}
          min={minValue}
          onChange={onSliderChange}
        />
      </div>
      <SliderLabels min={minValue} max={maxValue} currency={currency} />
    </>
  )
}

Selector.propTypes = {
  currency: PropTypes.string.isRequired,
  inputValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  sliderCredit: PropTypes.number.isRequired,
}
