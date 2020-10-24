import React, { useState } from 'react'
import Selector from './Selector'
import './CreditSimulator.css'

export default function CreditSimulator() {
  /* No olvidar:
  1) poner limite min y max a los inputs y a los sliders
    (crear detec de errores para que no se ingresen num menores a 0 y mayores al max)
  2) pensar input para que acepte numeros enteros o moneda segun de que Selector se lo renderiza
  3) pensar al Slider para que renderice numeros o moneda segun de que Selector se lo renderice
  4) Componentes faltantes: SliderContainer/Slider, FeeContainer, ActionButtonsRow, CreditButton, FeeDetailButton
  5) Ver font que pide el ejercicio y colores azul bkg afinarlos */
  const [creditAmount, setCreditAmount] = useState(null)
  const handleChange = ({ target }) => {
    const inputValue = target.value
    setCreditAmount(inputValue)
  }
  return (
    <div className="simulator-container">
      <h1>Simulá tu crédito</h1>
      <Selector onChange={handleChange} />
      {/* <h1>{creditAmount}</h1> */}
    </div>
  )
}
