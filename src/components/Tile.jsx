import React from 'react'
import './Tile.css'

function Tile({handleClick, type, letter, point}){

  return (
    <div className="tile" onClick={() => handleClick(letter)}>
        {
          type === 'enter-del' ?
            <p className="enter-del">{letter}</p> :
            <>
              <p className="tile__letter">{letter}</p>
              <p className="tile__point">{point}</p>
            </> 
        }
    </div>
  )
}

export default Tile;