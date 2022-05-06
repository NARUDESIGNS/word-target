import React from 'react'

function Tile({type, letter, point}){
  return (
    <div className="tile">
        {
          type === 'enter-del' ?
            <p className="enter-del">{letter}</p> :
            <>
              <p className="tile_letter">{letter}</p>
              <p className="tile_point">{point}</p>
            </> 
        }
    </div>
  )
}

export default Tile;