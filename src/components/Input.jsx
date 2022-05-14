import React from 'react'
import './Input.css'

function Input({inputBoxCount, inputCount, isClicked, target}) {
    inputBoxCount = 6;
    isClicked = false;
    target = 19;
    const inputBoxes = Array(inputBoxCount).fill('');

  return (
    <div className="input-container">
        <h3 className="input-container__count">{inputCount || 0}</h3>
        <section className="target">
            <p className="target__text">TARGET = </p>
            <span className="target__value">{target}</span>
        </section>
        <section className="input">
           {inputBoxes.map(item => (
               <div className={item ? 'input-filled' : 'input-empty'}>
                   <p className="input-value">{item || ''}</p>
               </div>
           ))}
        </section>
    </div>
  )
}

export default Input