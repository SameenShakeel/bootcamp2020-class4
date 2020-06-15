import React, { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  let [count, setCount] = useState(0);
  let [IsMorning, SetMorning] = useState(true);

  return (
    <div className={`box ${IsMorning ? 'dayLight' : ''} `}>

      <h1>Good {IsMorning ? `Morning` : `Night`}</h1>

      <button onClick={()=> SetMorning(!IsMorning)}>Update day</button>

      <Message Counter={count} />

      <button onClick={() => setCount(++count)}>
        Update Counter
        </button>

      <button onClick={() => setCount(--count)}>
        Decrease Counter
        </button>

      <button onClick={() => setCount(0)}>
        Reset
        </button>
    </div>
  );
}

export default App;
