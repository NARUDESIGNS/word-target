import React from 'react';
import logo from '../wt-logo.jpg'
import './Header.css'

function Header({help, score}) {
  return (
    <div className="header">
        <section className="help">
            <h3 className="help__count">HELP: {help || 2}</h3>
            <span className="help__icon">?</span>
        </section>

        <img className="app-logo" src={logo} alt="logo"/>

        <h3 className="score">SCORE: {score || 120}</h3>
    </div>
  )
}

export default Header