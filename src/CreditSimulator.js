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
  6) Dividir los componentes en carpetas distintas
  7) Ver como importo CSS para que no queden estilos globales / CSS Modules / Sass
  8) Refactorear funciones handlers */
  const minCreditValue = 5000
  const maxCreditValue = 50000
  const minPeriod = 3
  const maxPeriod = 24

  const [credit, setCredit] = useState(minCreditValue)
  const [inputCredit, setInputCredit] = useState(minCreditValue)
  const [sliderCredit, setSliderCredit] = useState(minCreditValue)

  const [period, setPeriod] = useState(minPeriod)
  const [inputPeriod, setInputPeriod] = useState(minPeriod)
  const [sliderPeriod, setSliderPeriod] = useState(minPeriod)

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

  const handlePeriodInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    setInputPeriod(inputValue)
    if (inputValue >= minPeriod && inputValue <= maxPeriod) {
      setSliderPeriod(inputValue)
      setPeriod(inputValue)
    }
  }

  const handlePeriodInputBlur = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    let validValue = null
    if (inputValue < minPeriod) {
      validValue = minPeriod
    } else if (inputValue > maxPeriod) {
      validValue = maxPeriod
    }
    if (validValue) {
      setInputPeriod(validValue)
      setSliderPeriod(validValue)
      setPeriod(validValue)
    }
  }

  const handlePeriodSliderChange = sliderValue => {
    setSliderPeriod(sliderValue)
    setInputPeriod(sliderValue)
    setPeriod(sliderValue)
  }

  return (
    <div className="simulator-container">
      <h1>Simulá tu crédito</h1>
      <Selector
        currency="$"
        inputValue={inputCredit}
        label="MONTO TOTAL"
        maxValue={maxCreditValue}
        minValue={minCreditValue}
        onInputChange={handleCreditInputChange}
        onInputBlur={handleCreditInputBlur}
        onSliderChange={handleCreditSliderChange}
        sliderCredit={sliderCredit}
      />
      <Selector
        currency=""
        inputValue={inputPeriod}
        label="PLAZO"
        maxValue={maxPeriod}
        minValue={minPeriod}
        onInputChange={handlePeriodInputChange}
        onInputBlur={handlePeriodInputBlur}
        onSliderChange={handlePeriodSliderChange}
        sliderCredit={sliderPeriod}
      />
      <div className="fee-container">
        <p className="fee-title">CUOTA FIJA POR MES</p>
        <p className="fee-amount">$ {Math.round((credit / period) * 100) / 100}</p>
      </div>
    </div>
  )
}
