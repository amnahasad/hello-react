import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("");
  const handleInpurUser = (e) => setName(e.target.value);

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button text="reset" reset={reset} onClick={handleInpurUser}/>
      {name && <h1> Hello {name}</h1> }
      {!name && ""}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
