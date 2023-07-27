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
      if (val === ".") {
        if (!value.toString().includes(".")) {
          setValue((prevValue) => prevValue + val);
        }
      } else {
        setValue((prevValue) => {
          const newVal = parseFloat(`${prevValue}${val}`)
          return newVal
        })
      }
    } else if (val === "AC") {
    setValue(0)
    setPrevValue(0)
    setOperator(null)
  } else if (val === "±") {
    setValue((value) => (-parseFloat(value)).toString());
    setOperator(null)
    if (prevValue != null) {
      setPrevValue((prevValue) => (-parseFloat(prevValue)).toString());
    }
  } else if (val === "=") {
    if (operator && prevValue !== null) {
      const current = parseFloat(value)
      const previous = parseFloat(prevValue)
      switch (operator) {
        case "+":
          setValue((previous + current).toString())
          break;
        case "-":
          setValue((previous - current).toString())
          break;
        case "X":
          setValue((previous * current).toString())
          break;
        case "/":
          setValue((previous / current).toString())
          break;
        case "%":
          setValue(((previous / 100) * current).toString())
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