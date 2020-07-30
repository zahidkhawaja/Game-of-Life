import React, { useState } from 'react';
import './App.css';
import Grid from "./components/Grid"
import About from "./components/About"

function App() {

  const [color, setColor] = useState(true);
  return (
    <div className="App">
      <header className= {color ? "App-header" : "Alt-header"}>
        <h1>Game of Life</h1>
        <button onClick = {() => setColor(!color)}>Toggle Colors</button>
      </header>
      <div className = "content">
      <div className = "primary">
      <div className = "grid">
      <Grid />
      </div>
      <div className = "about">
      <About />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
