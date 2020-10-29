import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default function Input({ currency, value, placeHolder, onChange, onBlur }) {
  const inputContainerClass = currency ? 'input-currency-container' : 'input-container'
  return (
    <span className={inputContainerClass}>
      <input
        type="number"
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </span>
  )
}

Input.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
}

Input.defaultProps = {
  currency: null,
}
