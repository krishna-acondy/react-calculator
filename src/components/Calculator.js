import React from "react";
import "./Buttons.css"
import "./Screen.css"
import Screen from './Screen'
import Buttons from "./Buttons";


const Calculator = () => {
  return (
    <div className="calc">
      <Screen />
      <Buttons />
    </div>
    )
  }

export default Calculator;