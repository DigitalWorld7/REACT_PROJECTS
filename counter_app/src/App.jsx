import React, { useState } from 'react';
import './App.css';

function App() {
  // State for counter
  const [count, setCount] = useState(0);

  // State for voting options
  const [votesRam, setVotesRam] = useState(0);
  const [votesShyam2, setVotesShyam2] = useState(0);

  // Functions for counter
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Functions for voting
  const voteForOption1 = () => {
    setVotesRam(votesRam + 1);
  };

  const voteForOption2 = () => {
    setVotesShyam2(votesShyam2 + 1);
  };

  // Function to determine the winner
  const winner = () => {
    if (votesRam > votesShyam2) {
      return 'Ram is winning';
    } else if (votesShyam2 > votesRam) {
      return 'Shyam is winning';
    } else {
      return 'It\'s a Tie';
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <div className="counter">
            <h1>Simple Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>

          <div className="voting">
            <h1>Voting App</h1>
            <div className="voting-options">
              <div className="vote-option">
                <h2>Ram</h2>
                <p>Votes: {votesRam}</p>
                <button onClick={voteForOption1}>Vote for Ram</button>
              </div>
              <div className="vote-option">
                <h2>Shyam</h2>
                <p>Votes: {votesShyam2}</p>
                <button onClick={voteForOption2} className='btn'>Vote for Shyam</button>
              </div>
            </div>
            <h2>{winner()}</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
