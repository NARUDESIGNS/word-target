import React from 'react'
import './Tile.css'

function Tile({type, letter, point}){

  return (
    <div className={`${type === 'enter-del' ? 'enter-del' : null} tile`}>
      <p className="tile__letter">{letter}</p>
      <p className="tile__point">{point}</p>
    </div>
  )
}

export default Tile;