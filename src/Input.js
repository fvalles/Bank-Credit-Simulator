import PropTypes from 'prop-types'
import React from 'react'
import './Input.css'

export default function Input({ credit, placeHolder, onChange, onBlur }) {
  return (
    <span className="input-container">
      <input
        type="number"
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        value={credit}
      />
    </span>
  )
}

Input.propTypes = {
  credit: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
}
