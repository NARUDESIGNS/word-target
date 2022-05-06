import React from 'react'

function Input({inputBoxCount, inputCount}) {
    const inputBoxes = Array(inputBoxCount || 4).fill('');

  return (
    <div>
        <h3 className="input-count">{inputCount || 5}</h3>
        <section className="target">
            <p className="target__text">Target = </p>
            <span className="target__value">14</span>
        </section>
        <section className="input">
           {inputBoxes.map(item => (
               <div className={item ? 'input-filled' : 'input-empty'}>
                   <p className="input-value">{item || 'H'}</p>
               </div>
           ))}
        </section>
    </div>
  )
}

export default Input