import PropTypes from 'prop-types'
import React from 'react'
import './Input.css'

export default function Input({ placeHolder, onChange }) {
  return (
    <span className="input-container">
      <input type="number" placeholder={placeHolder} onChange={onChange} />
    </span>
  )
}

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
