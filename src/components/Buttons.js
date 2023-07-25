import React from "react";

const buttons = [
  { value: 'AC', type: 'operator' },
  { value: '±', type: 'operator' },
  { value: '%', type: 'operator' },
  { value: '+', type: 'operator' },
  { value: 7, type: 'number' },
  { value: 8, type: 'number' },
  { value: 9, type: 'number' },
  { value: '-', type: 'operator' },
  { value: 4, type: 'number' },
  { value: 5, type: 'number' },
  { value: 6, type: 'number' },
  { value: 'X', type: 'operator' },
  { value: 1, type: 'number' },
  { value: 2, type: 'number' },
  { value: 3, type: 'number' },
  { value: '/', type: 'operator' },
  { value: 0, type: 'zero' },
  { value: '.', type: 'operator' },
  { value: '=', type: 'operator' },
]

const Buttons = () => {

  const clickHandler = e => {
    console.log(e)
  }

  return (
    <div>
      {buttons.map(button =>
        <button
          key={button.value}
          onClick={clickHandler}
          className={`button${button.type === 'number' ? '' : button.type === 'operator' ? '-operator' : '-zero'}`} >
          {button.value}
        </button>
      )}
    </div>
  )
}

export default Buttons;
