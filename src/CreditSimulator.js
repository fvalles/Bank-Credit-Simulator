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
  5) Ver font que pide el ejercicio y colores azul bkg afinarlos
  6) Dividir los componentes en carpetas distintas */
  const minCreditValue = 5000
  const maxCreditValue = 50000

  const [credit, setCredit] = useState(minCreditValue)
  const [inputCredit, setInputCredit] = useState(minCreditValue)
  const [sliderCredit, setSliderCredit] = useState(minCreditValue)

  const handleCreditInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    setInputCredit(inputValue)
    if (inputValue >= minCreditValue && inputValue <= maxCreditValue) {
      setSliderCredit(inputValue)
      setCredit(inputValue)
    }
  }

  const handleCreditInputBlur = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    let validValue = null
    if (inputValue < minCreditValue) {
      validValue = minCreditValue
    } else if (inputValue > maxCreditValue) {
      validValue = maxCreditValue
    }
    if (validValue) {
      setInputCredit(validValue)
      setSliderCredit(validValue)
      setCredit(validValue)
    }
  }

  const handleCreditSliderChange = sliderValue => {
    setSliderCredit(sliderValue)
    setInputCredit(sliderValue)
    setCredit(sliderValue)
  }

  return (
    <div className="simulator-container">
      <h1>Simulá tu crédito</h1>
      <Selector
        onInputChange={handleCreditInputChange}
        onInputBlur={handleCreditInputBlur}
        onSliderChange={handleCreditSliderChange}
        inputCredit={inputCredit}
        sliderCredit={sliderCredit}
        minCreditValue={minCreditValue}
        maxCreditValue={maxCreditValue}
      />
    </div>
  )
}
