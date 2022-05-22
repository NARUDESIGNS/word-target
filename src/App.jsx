import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Keyboard from './components/Keyboard';
import {words, letters} from './data';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [showWord, setShowWord] = useState(false);
  const [helpCount, setHelpCount] = useState(5);
  const [target, setTarget] = useState(0);
  const [inputScoreCount, setInputScoreCount] = useState(0);
  const [input, setInput] = useState([]);
  const [score, setScore] = useState(0);
  const [checkingInput, setCheckingInput] = useState(false);
  
  const wordsCopy = [...words];
  let randomWord;
  
  const inputEl = useRef();
  const app = useRef();

  // evaluate input
  const evaluateInput = (decision) => {
    if (decision) {
      inputEl.current.classList.add('blink');
      setTimeout(() => inputEl.current.classList.remove('blink'), 1000);
      setScore(prevScore => prevScore + target);
      setTimeout(() => createChallenge(), 1200);
    }
    else {
      inputEl.current.classList.add('shake');
      setTimeout(() => inputEl.current.classList.remove('shake'), 500);
      setTimeout(() => {
        setInput(Array(word.length).fill(''))
        setInputScoreCount(0);
      }, 1000);
    }
  }
  
  // generate new challenge
  const createChallenge = () => {
    const randomIndex = Math.round(Math.random() * wordsCopy.length - 1);
    randomWord = wordsCopy.splice(randomIndex, 1).toString();
    // compute target
    let targetValue = 0;
    randomWord.split('').forEach(item => {
     targetValue += letters[item];
    });
    setWord(randomWord);
    setInput(Array(randomWord.length).fill(''));
    setInputScoreCount(0);
    setTarget(targetValue);
    setShowWord(false);
    setCheckingInput(false);
  }  

  //listen to keyboard events
  const onkeydown = (e) => {
    const key = e.key.toUpperCase();
    if (key === 'ENTER') handleClick('Enter');
    else if (key === 'BACKSPACE') handleClick('Delete');
    else if (letters[key]) handleClick(key);
    if (key === ' ') revealWord();
  }

  // handle keyboard click
  const handleClick = (value) => {
    if (letters[value] && !checkingInput){
      setInput(prevInput => {
        for (let i=0; i<word.length; i++) {
          if (!prevInput[i]) {
            prevInput[i] = value;
            break;
          }
        }
        return [...prevInput]
      }); 
    }

    // conpute score
    if (letters[value] && input.some(item => item === '')) setInputScoreCount(prevScore => prevScore + letters[value]);

    // delete input
    if (value === 'Delete' && input.some(item => item !== '')) {
      for (let i = input.length - 1; i >= 0; i--) {
        if (input[i]) {
          // conpute score
          setInputScoreCount(prevScore => prevScore - letters[input[i]]);

          setInput(prevInput => {
            prevInput[i] = '';
            return [...prevInput];
          });

          break;
        }
      }
    };

    // user clicks on enter
    if (value === 'Enter' && input.every(item => item !== '' && !checkingInput)) {
      if (inputScoreCount === target) {
        setCheckingInput(true);
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.join('')}`)
        .then(res => res.json())
        .then(data => evaluateInput(data[0].word === input.join('').toLowerCase()))
        .catch(err => {
          console.log(err.message);
          if (err.message === 'Failed to fetch') alert('No internet connection!');
          else evaluateInput(false);
        });
      } else evaluateInput(false);
    }
  }
  

  // user clicks on help icon
  const revealWord = () => {
    if (helpCount > 0 && !showWord) {
      setShowWord(true);
      setHelpCount(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
  }
  
  
  useEffect(() => {
    createChallenge();
    app.current.focus();
    // eslint-disable-next-line
  }, []); 

   
  return (
    <div className="App" onKeyDown={onkeydown} tabIndex="0" ref={app}>
      <Header revealWord={revealWord} helpCount={helpCount} score={score}/>
      <Input
        inputBoxes={input}
        target={target}
        inputScoreCount={inputScoreCount}
        word={word}
        showWord={showWord}
        inputEl={inputEl}
      />
      <Keyboard handleClick={handleClick} letters={letters} />
      <p className="madeby">Made with 🤍 by 
        <a href="https://github.com/narudesigns" target="_blank" rel="noreferrer"> Narudesigns</a>
      </p>
    </div>
  );
}

export default App;
