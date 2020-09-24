import React, { useReducer, useState, useEffect } from "react";
import Cell from "./Cell";
import NextGen from "./NextGen";
import Run from "./Run";

const createGrid = size => {
  const x = Array.from({ length: size }).fill(0);
  return Array.from({ length: size }).fill(x);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fill":
      const [row, col] = action.payload;
      let nextState = state.gridData.map(x => x.slice());
      nextState[row][col] = state.gridData[row][col] === 1 ? 0 : 1;
      return { ...state, gridData: nextState, running: false };
    case "run":
      return { ...state, gridData: action.payload };
    case "running":
      return { ...state, running: !state.running };
    case "clear":
      return { running: false, gridData: createGrid(25) };
    default:
      return state;
  }
};

function Grid() {

  const size = 25;
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(300);
  const [state, dispatch] = useReducer(reducer, {
    gridData: createGrid(size),
    running: false
  });

  useEffect(() => {
    setCount(0);
  }, [])

  return (
    <div>
        <div className = "count">
                <h4>Current generation: {count}</h4>
            </div>
      <div className="grid">
        {state.gridData.map(
          (row, i) =>
            row.map((col, j) => (
              <Cell
                key={`${i} ${j}`}
                condition={col === 1 ? "alive" : "dead"}
                coord={[i, j]}
                dispatch={dispatch}
                count = {count}
                setCount = {setCount}
              />
            ))
        )}
        <div className="grid-buttons">
          <NextGen className="btn" state={state} dispatch={dispatch} count = {count} setCount = {setCount} />
          {state.running ? (
            <Run dispatch={dispatch} gridData={state.gridData} count = {count} setCount = {setCount} speed = {speed} setSpeed = {setSpeed} />
          ) : (
            <button
              onClick={() => dispatch({ type: "running" })}
              className="no-go btn"
            >
            Run Animation
            </button>
          )}
          <button className="btn" onClick={() => {
              dispatch({ type: "clear" })
              setCount(0);
            }
          }>
            Start Over
          </button>
        </div>
        <div className = "speed">
        <button className = "btn" onClick = {() => setSpeed(speed / 2)}>Increase Speed</button>
          <button className = "btn" onClick = {() => setSpeed(speed * 2)}>Decrease Speed</button>
        </div>
      </div>
    </div>
  );
}

export default Grid;
