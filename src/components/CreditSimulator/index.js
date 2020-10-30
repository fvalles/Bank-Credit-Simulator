/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import numeral from 'numeral'
import Selector from '../Selector'
import Button from '../Button'
import './style.css'

export default function CreditSimulator() {
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

  const extractNumFromStr = str => {
    let inputStringNum = str.substring(2)
    let dotPos = inputStringNum.indexOf('.')
    while (dotPos !== -1) {
      const firstPartOfNum = inputStringNum.substring(0, dotPos)
      const secPartOfNum = inputStringNum.substring(dotPos + 1)
      inputStringNum = firstPartOfNum + secPartOfNum
      dotPos = inputStringNum.indexOf('.')
    }
    return parseInt(inputStringNum, 10)
  }

  const showFeesDetail = () => {
    let message = ''
    const feeAmount = Math.round((credit.value / period.value) * 100) / 100
    numeral.defaultFormat('$ 0,0.00')
    const feeAmountFormatted = numeral(feeAmount).format()
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < period.value; i++) {
      message += `Cuota ${i + 1}: ${feeAmountFormatted}\n`
    }
    return message
  }
  /* End of Helper Functions */

  /* Beginning of Events Handler Functions */
  const handleCreditInputChange = ({ target }) => {
    const inputValue = extractNumFromStr(target.value)
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
    const value = extractNumFromStr(target.value)
    const inputValue = keepValueLimits(value, minCredit, maxCredit)
    if (inputValue) {
      setCredit({ value: inputValue, inputValue, sliderValue: inputValue })
    }
  }

  const handleCreditSliderChange = sliderValue => {
    setCredit({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }

  const handlePeriodInputChange = ({ target }) => {
    let inputValue = target.value
    let validValue
    if (inputValue === '') {
      validValue = false
    } else {
      inputValue = parseInt(target.value, 10)
      validValue = validateInputValue(inputValue, minPeriod, maxPeriod)
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
    const inputValue = keepValueLimits(value, minPeriod, maxPeriod)
    if (inputValue) {
      setPeriod({ value: inputValue, inputValue, sliderValue: inputValue })
    } else if (target.value === '') {
      setPeriod({ value: minPeriod, inputValue: minPeriod, sliderValue: minPeriod })
    }
  }

  const handlePeriodSliderChange = sliderValue => {
    setPeriod({ value: sliderValue, inputValue: sliderValue, sliderValue })
  }

  const handleGetCreditBtnClick = () => {
    const creditAmount = credit.value
    numeral.defaultFormat('$ 0,0')
    const creditAmountFormatted = numeral(creditAmount).format()
    // eslint-disable-next-line no-alert
    alert(`¡Obtuviste tu crédito por ${creditAmountFormatted} en ${period.value} cuotas s/interés!`)
  }

  const handleGetFeesDetailBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Detalle de cuotas:\n\n${showFeesDetail()}`)
  }
  /* End of Events Handler Functions */

  numeral.locale('en')
  const feeAmount = Math.round((credit.value / period.value) * 100) / 100
  numeral.defaultFormat('$ 0,0.00')
  const feeAmountFormatted = numeral(feeAmount).format()

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
        <p className="fee-amount">{feeAmountFormatted}</p>
      </div>
      <div className="buttons-container">
        <Button
          label="OBTENÉ CRÉDITO"
          height={50}
          width="65%"
          bkColor="#75D1A8"
          color="white"
          fontSize={16}
          onClick={handleGetCreditBtnClick}
        />
        <Button
          label="VER DETALLE DE CUOTAS"
          height={50}
          width="34%"
          bkColor="#3E76CC"
          color="white"
          fontSize={12}
          onClick={handleGetFeesDetailBtnClick}
        />
      </div>
    </div>
  )
}
