import React from 'react';
import './App.css';
import Grid from "./components/Grid"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Life</h1>
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
