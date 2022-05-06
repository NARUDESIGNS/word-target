import React from 'react';
import logo from '../wt-logo.jpg'
import './Header.css'

function Header({help, score}) {
  return (
    <div className="header">
        <section className="help">
            <p className="help__count">HELP: {help || 2}</p>
            <span className="help__icon">?</span>
        </section>

        <img className="header__logo" src={logo} alt="logo"/>

        <p className="header__score">SCORE: {score || 120}</p>
    </div>
  )
}

export default Header