/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import Selector from '../Selector'
import Button from '../Button'
import './style.css'

export default function CreditSimulator() {
  /* No olvidar:
  1) Formatear num con sep de miles
  4) Ver como importo CSS para que no queden estilos globales / CSS Modules / Sass
  5) Refactorear funciones handlers y ver si conglomero states en 2 objetos de 3 key-values
  6) Aplicar alguna funcionalidad a los 2 botones. Una puede ser un alert sencillo y el otro un pop-up
  o una lista que se despliegue en la pantalla
  7) ordernar alfabeticamente styles clases */
  const minCredit = 5000
  const maxCredit = 50000
  const minPeriod = 3
  const maxPeriod = 24

  const [credit, setCredit] = useState({
    value: minCredit,
    inputValue: minCredit,
    sliderValue: minCredit,
  })

  const [period, setPeriod] = useState({
    value: minPeriod,
    inputValue: minPeriod,
    sliderValue: minPeriod,
  })

  const handleCreditInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    let validValue = false
    if (inputValue >= minCredit && inputValue <= maxCredit) {
      validValue = true
    }
    if (validValue) {
      setCredit({ value: inputValue, inputValue, sliderValue: inputValue })
    } else {
      setCredit(prevCredit => {
        return {
          ...prevCredit,
          inputValue,
        }
      })
    }
  }

  const handleCreditInputBlur = ({ target }) => {
    const value = parseInt(target.value, 10)
    let inputValue = null
    if (value < minCredit) {
      inputValue = minCredit
    } else if (value > maxCredit) {
      inputValue = maxCredit
    }
    if (inputValue) {
      setCredit({ value: inputValue, inputValue, sliderValue: inputValue })
    }
  }

  const handleCreditSliderChange = sliderValue => {
    setCredit({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }

  const handlePeriodInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    let validValue = false
    if (inputValue >= minPeriod && inputValue <= maxPeriod) {
      validValue = true
    }
    if (validValue) {
      setPeriod({ value: inputValue, inputValue, sliderValue: inputValue })
    } else {
      setPeriod(prevPeriod => {
        return {
          ...prevPeriod,
          inputValue,
        }
      })
    }
  }

  const handlePeriodInputBlur = ({ target }) => {
    const value = parseInt(target.value, 10)
    let inputValue = null
    if (value < minPeriod) {
      inputValue = minPeriod
    } else if (value > maxPeriod) {
      inputValue = maxPeriod
    }
    if (inputValue) {
      setPeriod({ value: inputValue, inputValue, sliderValue: inputValue })
    }
  }

  const handlePeriodSliderChange = sliderValue => {
    setPeriod({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }

  return (
    <div className="simulator-container">
      <h1>Simulá tu crédito</h1>
      <Selector
        currency="$"
        inputValue={credit.inputValue}
        label="MONTO TOTAL"
        maxValue={maxCredit}
        minValue={minCredit}
        onInputChange={handleCreditInputChange}
        onInputBlur={handleCreditInputBlur}
        onSliderChange={handleCreditSliderChange}
        sliderCredit={credit.sliderValue}
      />
      <Selector
        currency=""
        inputValue={period.inputValue}
        label="PLAZO"
        maxValue={maxPeriod}
        minValue={minPeriod}
        onInputChange={handlePeriodInputChange}
        onInputBlur={handlePeriodInputBlur}
        onSliderChange={handlePeriodSliderChange}
        sliderCredit={period.sliderValue}
      />
      <div className="fee-container">
        <p className="fee-title">CUOTA FIJA POR MES</p>
        <p className="fee-amount">$ {Math.round((credit.value / period.value) * 100) / 100}</p>
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
