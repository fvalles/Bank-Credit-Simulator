/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import Selector from './Selector'
import Button from './Button'
import './CreditSimulator.css'

export default function CreditSimulator() {
  /* No olvidar:
  1) Formatear num con sep de miles
  2) Ver colores azul bkg afinarlos
  3) Dividir los componentes en carpetas distintas
  4) Ver como importo CSS para que no queden estilos globales / CSS Modules / Sass
  5) Refactorear funciones handlers y ver si conglomero states en 2 objetos de 3 key-values
  6) Aplicar alguna funcionalidad a los 2 botones. Una puede ser un alert sencillo y el otro un pop-up
  o una lista que se despliegue en la pantalla
  7) ordernar alfabeticamente styles clases */
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
      <div className="buttons-container">
        <Button
          label="OBTENÉ CRÉDITO"
          height={50}
          width="65%"
          bkColor="#75D1A8"
          color="white"
          fontSize={20}
        />
        <Button
          label="VER DETALLE DE CUOTAS"
          height={50}
          width="34%"
          bkColor="#3E76CC"
          color="white"
        />
      </div>
    </div>
  )
}
