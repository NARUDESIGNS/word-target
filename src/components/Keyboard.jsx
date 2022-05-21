import React from 'react';
import Tile from './Tile';
import './Keyboard.css'

function Board({handleClick, letters}) {
  return (
    <div className="keyboard">
      {
        Object.keys(letters).map((item, value) => (
          <Tile 
            handleClick={handleClick}
            type={(item === "Enter" || item === "Delete") ? "enter-del" : "letter" }
            letter={item}
            point={letters[item]}
            key={value}
          />
        ))
      }
    </div>
  )
}

export default Board;