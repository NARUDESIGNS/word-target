import React from 'react';
import './Input.css'

function Input({inputBoxCount, inputCount}) {
    const inputBoxes = Array(inputBoxCount || 4).fill('');

  return (
    <div className="input-container">
        <h3 className="input-container__count">{inputCount || 5}</h3>
        <section className="target">
            <p className="target__text">TARGET = </p>
            <span className="target__value">14</span>
        </section>
        <section className="input">
           {inputBoxes.map((item, index) => (
               <div className={!item ? 'input-filled' : 'input-empty'} key={index}>
                   <p className="input-value">{item || 'H'}</p>
               </div>
           ))}
        </section>
    </div>
  )
}

export default Input