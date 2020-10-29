import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button({ label, bkColor, color, fontSize, width, height }) {
  const style = {
    backgroundColor: bkColor,
    border: 0,
    color,
    fontWeight: 700,
    height,
    width,
  }
  if (fontSize) {
    style.fontSize = fontSize
  }
  return (
    <button type="button" style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  bkColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

Button.defaultProps = {
  fontSize: 14,
}
