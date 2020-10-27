import PropTypes from 'prop-types'
import React from 'react'
import './Input.css'

export default function Input({ value, placeHolder, onChange, onBlur }) {
  return (
    <span className="input-container">
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
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
}
