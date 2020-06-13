import React from 'react';
import './App.css';

const App: React.FC = () => {

const [counter, setCounter] = React.useState(0);
  const [text, setText] = React.useState(``);

  const buttonPressed = (isIncrementing: boolean) => {
    let parseValue = parseInt(text, 10);
    if (!isNaN(parseValue)) {
      if (isIncrementing) {
        setCounter(parseValue + 1);
        setText((parseValue + 1).toString());
      }
      else {
        setCounter(parseValue - 1);
        setText((parseValue - 1).toString());
      }
    }
    else {
      setText(counter.toString());
    }
  }

  return (
  <div>
  <button onClick={() => buttonPressed(false)}>-</button>

  <input
onChange={event => setText(event.target.value)}
        value={text} />

      <button onClick={() => buttonPressed(true)}>+</button> 
      </div>
      );
      }

      export default App;