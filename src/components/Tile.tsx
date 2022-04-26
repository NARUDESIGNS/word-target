import React from 'react'

function Tile(type: string, letter: string, point: number) : JSX.Element {
  return (
    <div className="tile">
        {
        type === 'enter-del' ?
            <button className="enter-del">{letter}</button> :
            <>
                <p className="tile_letter">{letter}</p>
                <p className="tile_point">{point}</p>
             </> 
        }
    </div>
  )
}

export default Tile;