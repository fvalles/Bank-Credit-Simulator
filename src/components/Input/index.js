import PropTypes from 'prop-types'
import React from 'react'
import './style.css'
import numeral from 'numeral'
import 'numeral/locales/es'

export default function Input({ currency, value, placeHolder, onChange, onBlur }) {
  numeral.locale('es')
  let number
  let inputType
  if (currency) {
    numeral.defaultFormat('$ 0,0')
    number = numeral(value).format()
    inputType = 'string'
  } else {
    number = value
    inputType = 'number'
  }
  return (
    <span className="input-container">
      <input
        type={inputType}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        value={number}
      />
    </span>
  )
}

Input.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
}

Input.defaultProps = {
  currency: null,
}
