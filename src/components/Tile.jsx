import React from 'react'
import './Tile.css'

function Tile({type, letter, point}){
  return (
    <div className="tile">
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