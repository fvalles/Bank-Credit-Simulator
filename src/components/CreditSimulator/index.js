/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import Selector from '../Selector'
import Button from '../Button'
import './style.css'

export default function CreditSimulator() {
  /* No olvidar:
  1) Formatear num con sep de miles
  4) Ver como importo CSS para que no queden estilos globales / CSS Modules / Sass
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

  /* Beginning of Helper Functions */
  const validateInputValue = (inputValue, minValue, maxValue) => {
    let validValue = false
    if (inputValue >= minValue && inputValue <= maxValue) {
      validValue = true
    }
    return validValue
  }

  const keepValueLimits = (value, minValue, maxValue) => {
    let extremeValue = null
    if (value < minValue) {
      extremeValue = minValue
    } else if (value > maxValue) {
      extremeValue = maxValue
    }
    return extremeValue
  }
  /* End of Helper Functions */

  /* Beginning of Events Handler Functions */
  const handleCreditInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    const validValue = validateInputValue(inputValue, minCredit, maxCredit)
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
    const inputValue = keepValueLimits(value, minCredit, maxCredit)
    if (inputValue) {
      setCredit({ value: inputValue, inputValue, sliderValue: inputValue })
    }
  }

  const handleCreditSliderChange = sliderValue => {
    setCredit({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }

  const handlePeriodInputChange = ({ target }) => {
    const inputValue = parseInt(target.value, 10)
    const validValue = validateInputValue(inputValue, minPeriod, maxPeriod)
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
    const inputValue = keepValueLimits(value, minPeriod, maxPeriod)
    if (inputValue) {
      setPeriod({ value: inputValue, inputValue, sliderValue: inputValue })
    }
  }

  const handlePeriodSliderChange = sliderValue => {
    setPeriod({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }
  /* End of Events Handler Functions */

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
