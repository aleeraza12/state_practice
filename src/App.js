import React, { useState } from 'react';
import './App.css';
import { Message } from './Message' //{}braces is lye k default export nhi kia message app me
function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (

    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h2>Day time = {isMorning ? 'Morning' : 'Night'}</h2>
      <Message counter={count} />
      <br />
      <button onClick={
        () => setCount(count + 1)
      }>
        Click Me
      </button>


    </div>
  );
}

export default App;
