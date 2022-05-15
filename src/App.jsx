import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Keyboard from './components/Keyboard';
import {words, letters} from './data';
import { useEffect, useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [target, setTarget] = useState(0);
  const [inputScore, setInputScore] = useState(0);
  const [input, setInput] = useState([]);
  
  const wordsCopy = [...words];
  
  
  // generate challenge
  const createChallenge = () => {
    const randomIndex = Math.round(Math.random() * wordsCopy.length - 1);
    const randomWord = wordsCopy.splice(randomIndex, 1).toString();
    // compute target
    let targetValue = 0;
    randomWord.split('').forEach(item => {
     targetValue += letters[item];
    });
    setWord(randomWord);
    setInput(Array(randomWord.length).fill(''));
    setTarget(targetValue);
  }  
  
  // handle keyboard click
  const handleClick = (value) => {
    if (letters[value]){
      setInput(prevInput => {
        for (let i=0; i<word.length; i++) {
          console.log('hello');
          if (!prevInput[i]) {
            prevInput[i] = value;
            break;
          }
        }
        console.log(value, letters[value]);
        return [...prevInput]
      }); 
    }

    // conpute score
    if (letters[value] && input.some(item => item === '')) setInputScore(prevScore => prevScore + letters[value]);

    // delete input
    if (value === 'Delete' && input.some(item => item !== '')) {
      for (let i = input.length - 1; i >= 0; i--) {
        if (input[i]) {
          // conpute score
          setInputScore(prevScore => prevScore - letters[input[i]]);

          setInput(prevInput => {
            prevInput[i] = '';
            return [...prevInput];
          });

          break;
        }
      }
    };
  }

  
  
  useEffect(() => {
    createChallenge();

    // handle click when user types with keyboard
    // document.addEventListener('keypress', (e) => {
    //   handleClick(e.key.toUpperCase());
    // });
  }, []); 

   
  return (
    <div className="App">
      <Header />
      <Input
        word={word}
        inputBoxes={input}
        target={target}
        inputScore={inputScore}
      />
      <Keyboard handleClick={handleClick} letters={letters} />
    </div>
  );
}

export default App;
