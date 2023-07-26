import React from "react";
import "./Buttons.css"
import "./Screen.css"
import Screen from './Screen'
import Buttons from "./Buttons";


const Calculator = () => {
  const [value, setValue] = React.useState(0)
  const [prevValue, setPrevValue] = React.useState(0)
  const [operator, setOperator] = React.useState(null)

  const operators = ["X", "%", "±", "AC", "+", "-", "/", "="]

  const onButtonClick = (val) => {
    if (!operators.includes(val)) {
      setValue((prevValue) => {
        const newVal = parseInt(`${prevValue}${val}`)
        return newVal
      } );
  } else if (val === "AC") {
    setValue(0)
    setPrevValue(0)
    setOperator(null)
  } else if (val === "±") {
    setValue(-(value))
    setOperator(null)
    setPrevValue(-(prevValue))
  } else if (val === "=") {
    if (operator && prevValue !== null) {
      switch (operator) {
        case "+":
          setValue(prevValue + value)
          break;
        case "-":
          setValue(prevValue - value)
          break;
        case "X":
          setValue(prevValue * value)
          break;
        case "/":
          setValue(prevValue / value)
          break;
        case "%":
          setValue((prevValue / 100) * value)
          break;
        default:
          break;
      }
      setPrevValue(0)
      setOperator(null)
    }
  } else {
    setPrevValue(value)
    setOperator(val)
    setValue(0)
  }
}

  return (
    <div className="calc">
      <Screen value={value || prevValue} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
    )
  }

    
    export default Calculator;