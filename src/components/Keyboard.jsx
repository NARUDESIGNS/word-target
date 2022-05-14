import React from 'react';
import Tile from './Tile';
import './Keyboard.css'

function Board() {
  const letters = {
    "Q": 10, "W": 4, "E": 1, "R": 1, "T": 1, "Y": 4, "U": 1, "I": 1, "O":1, "P": 3,
    "A": 1, "S": 1, "D": 2, "F": 4, "G": 2, "H": 4, "J": 8, "K": 5, "L": 1,
    "Enter": null, "Z": 10, "X": 8, "C": 3, "V": 4, "B": 3, "N": 1, "M": 3, "Delete": null  
  }

  return (
    <div className="keyboard">
      {
        Object.keys(letters).map(item => (
          <Tile 
            type={(item === "Enter" || item === "Delete") ? "enter-del" : "letter" }
            letter={item}
            point={letters[item]}
          />
        ))
      }
    </div>
  )
}

export default Board;