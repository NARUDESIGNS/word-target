import React from 'react'
import './Input.css'

function Input({inputBoxes, inputScoreCount, isClicked, target, word, showWord, inputEl}) {
    isClicked = false;

  return (
    <div className="input-container">
        <h3 className="input-container__count">{inputScoreCount}</h3>
        <section className="target">
            <p className="target__text">TARGET = </p>
            <span className="target__value">{target}</span>
        </section>
        <section className="input" ref={inputEl}>
           {inputBoxes.map((item, value) => (
               <div className={`${item ? 'input-filled' : 'input-empty'}`} key={value}>
                   <p className="input-value">{item}</p>
               </div>
           ))}
        </section>
        <br />
         <p> {showWord && word} </p> 
    </div>
  )
}

export default Input;