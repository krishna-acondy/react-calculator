import React from "react";
import "./Buttons.css"
import "./Screen.css"
import Screen from './Screen'
import Buttons from "./Buttons";


const Calculator = () => {
  const [value, setValue] = React.useState(0)

  const operators = ["X", "%", "±", "AC", "+", "-", "/", "="]

  const onButtonClick = (val) => {
    if (!operators.includes(val)) {
      setValue((prevValue) => {
        return parseInt(prevValue.toString() + val)
      } )
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