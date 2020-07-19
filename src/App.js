import React, { useState } from 'react';
import './App.css';
import { Message } from './Message'
function App() {
  let [count, setCount] = useState(1);
  return (

    <div>
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
