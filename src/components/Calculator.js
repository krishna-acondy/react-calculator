import React from "react";
import "./Buttons.css"
import "./Screen.css"
import Screen from './Screen'
import Buttons from "./Buttons";


const Calculator = () => {
  function onButtonClick(e) {
    console.log('inside calculator: ', e)
  }

  return (
    <div className="calc">
      <Screen value={1} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
    )
  }

export default Calculator;