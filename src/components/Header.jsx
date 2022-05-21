import React from 'react';
import logo from '../assets/wt-logo.jpg'
import './Header.css'

function Header({revealWord, helpCount, score}) {
  
  return (
    <div className="header">
        <section className="help">
            <h3 className="help__count">HELP: {helpCount}</h3>
            <span onClick={() => revealWord()} className="help__icon">?</span>
        </section>

        <img className="app-logo" src={logo} alt="logo"/>

        <h3 className="score">SCORE: {score}</h3>
    </div>
  )
}

export default Header