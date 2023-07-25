import React from "react";

const Buttons = () => {

  const clickHandler = e => {
    console.log(e)
  }

  return (
    <div>
      <button onClick={clickHandler} className="buttons-side">AC</button>
      <button onClick={clickHandler} className="buttons-side">±</button>
      <button onClick={clickHandler} className="buttons-side">%</button>
      <button onClick={clickHandler} className="buttons-side">+</button>
      <button onClick={clickHandler} className="buttons">7</button>
      <button onClick={clickHandler} className="buttons">8</button>
      <button onClick={clickHandler} className="buttons">9</button>
      <button onClick={clickHandler} className="buttons-side">-</button>
      <button onClick={clickHandler} className="buttons">4</button>
      <button onClick={clickHandler} className="buttons">5</button>
      <button onClick={clickHandler} className="buttons">6</button>
      <button onClick={clickHandler} className="buttons-side">X</button>
      <button onClick={clickHandler} className="buttons">1</button>
      <button onClick={clickHandler} className="buttons">2</button>
      <button onClick={clickHandler} className="buttons">3</button>
      <button onClick={clickHandler} className="buttons-side">/</button>
      <button onClick={clickHandler} className="button-zero">0</button>
      <button onClick={clickHandler} className="buttons-side">.</button>
      <button onClick={clickHandler} className="buttons-side">=</button>
    </div>
  ) }

export default Buttons;
