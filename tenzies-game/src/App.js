import React from 'react';
import Confetti from 'react-confetti'

import './App.css';
import Die from './Die';

function App() {
  //generating an array of 10 random numbers between 1-6 inclusive
  const allNewDice = () => {
    let numbersArray = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * 6 + 1);
      numbersArray.push({
        id: i,
        value: num,
        isHeld: false
      });
    }
    return numbersArray;
  }

  //state to hold the array of numbers 
  const [dice, setDice] = React.useState(allNewDice());

  //state that represents whether the user has won the game yet or not
  const [tenzies, setTenzies] = React.useState(false);

  //using a side effect to keep the two states in sync
  React.useEffect(() => {
    const win = dice.every((die) => {
      const valueToCheck = dice[0].value;
      return (die.isHeld && die.value === valueToCheck);
    })
    if (win) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice])

  //mapping over the dice array
  const mappedNumbers = dice.map(
    (obj) => <Die key={obj.id} id={obj.id} value={obj.value} isHeld={obj.isHeld} holdDice={holdDice} />)

  //function to start a new game OR re-roll the dice (not those that are held)
  function rollDice() {
    //new game
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    }
    //re-roll dice
    else {
      setDice(prevDice => {
        return prevDice.map(die => {
          if (die.isHeld) {
            return die;
          } else {
            return {
              ...die,
              value: Math.floor(Math.random() * 6 + 1)
            }
          }
        })
      });
    }
  }

  //function to hold dice
  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld }
        } else {
          return die;
        }
      })
    })
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="frame-outside">
        <div className="frame-inside">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {mappedNumbers}
          </div>
          <button className='roll-button' onClick={rollDice}>{tenzies ? `New Game` : `Roll`}</button>
        </div>
      </div>
    </main>
  );
}

export default App;
