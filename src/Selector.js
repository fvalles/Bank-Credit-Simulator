import React from 'react'
import PropTypes from 'prop-types'
import TitleContainer from './TitleContainer'

export default function Selector({ onChange }) {
  return (
    <>
      <TitleContainer label="MONTO TOTAL" onChange={onChange} />
    </>
  )
}

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
}
