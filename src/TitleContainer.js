import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import './TitleContainer.css'

export default function TitleContainer({ currency, value, label, onChange, onBlur }) {
  return (
    <div className="flex-row">
      <p>{label}</p>
      <Input currency={currency} placeHolder="" onChange={onChange} value={value} onBlur={onBlur} />
    </div>
  )
}

TitleContainer.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

TitleContainer.defaultProps = {
  currency: null,
}
