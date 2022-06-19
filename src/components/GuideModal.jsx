import React, { useState } from 'react';
import './GuideModal.css';
import guide from '../assets/wt-guide.png';
import demo from '../assets/wt-demo.png';

function GuideModal() {
    const [isOpen, setIsOPen] = useState(true);

    const closeModal = () => {
        setIsOPen(false);
    }

  return (
      <div>
          { isOpen &&  
          <div className="dim">
              <button className="dim__close-btn" onClick={closeModal}>close</button>
              <div className="modal">
                  <h1 className="modal__header">HOW TO PLAY</h1>
                  <h2>Introduction</h2>
                  <p>
                      This is a simple word game inspired by scrabble and wordle. <br />
                      You are presented with a <b> help button, score counter, score calculator, target score, blank boxes,</b> and <b>keyboard with tiles</b> <br />
                  </p>
                  <img src={guide} alt="Application guide snapshot" />
                  <h2>The Goal</h2>
                  <p>
                      The goal is to <b>spell a word</b> (using the tiles) with letters <b>that fills all the blank boxes</b> and also combines it score points <b>to meet the target.</b>
                      For example, if you have <b>4 blank boxes</b> and <b>target score of 9</b>, your goal is to spell a 4 letter word and the score points of the letters used must add up to give the target. <br />
                      A valid word for this challenge is <b>KING</b>. This solution is accepted because: <br />
                  </p>
                  <ul>
                      <li>The word exists in the dictionary.</li>
                      <li>It fills up all the blank boxes.</li>
                      <li>
                          Its letters carry score points that sums up to meet the target score -{`>`} 9. <br />
                          K = 5pts, I = 1pt, N = 1pt, G = 2pts {`=>`} 5 + 1 + 1 + 2 = 9.
                      </li>
                  </ul>
                  <img src={demo} alt="Application demo snapshot" />
                  <h2>Others</h2>
                  <p>
                      <b>Help Button:</b> You got 5 help counts which you can access by clicking on the <span className="modal__help-icon">?</span> button. <br />
                      When you are unable to figure out a solution to the challenge, you can click on this button to reveal the solution. <br />
                      <b>Score counter:</b> For every word you get correctly, the target score gets added to your overall score points.
                  </p>
              </div>
          </div>
          }
      </div>
  )
}

export default GuideModal;