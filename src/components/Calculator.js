import React from "react";
import "./Buttons.css"
import "./Screen.css"
import Screen from './Screen'
import Buttons from "./Buttons";


const Calculator = () => {
  const [value, setValue] = React.useState(0)
  const operators = ["X", "%", "±", "AC", "+", "-", "/", "="]

  //const onButtonClick = (val) => setValue(prevValue => operators.includes(val) ? prevValue : val)

  const onButtonClick = (val) => {
    if (!operators.includes(val)) {
      setValue(val)
    }
  }

  return (
    <div className="calc">
      <Screen value={value} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
    )
  }

export default Calculator;