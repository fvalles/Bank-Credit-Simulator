import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import './TitleContainer.css'

export default function TitleContainer({ label, onChange }) {
  return (
    <div className="flex-row">
      <p>{label}</p>
      <Input placeHolder="" onChange={onChange} />
    </div>
  )
}

TitleContainer.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
