import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // Vaqtni saqlash uchun
  const [isRunning, setIsRunning] = useState(false); // Taymer holati

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-title">timer</h1>
      <div className="timer-display">
        {String(Math.floor(time / 60)).padStart(2, '0')}:
        {String(time % 60).padStart(2, '0')}
      </div>
      <div className="timer-controls">
        <button className="timer-button" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="timer-button reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
