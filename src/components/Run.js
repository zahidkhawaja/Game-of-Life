import React, { useEffect, useRef, useState } from "react";
import { determineLife } from "../utils/gamelogic";

function Run({ dispatch, gridData, speed, setSpeed }) {
  const timerId = useRef(null);
  
  useEffect(() => {
    timerId.current = window.setTimeout(
      () => dispatch({ type: "run", payload: determineLife(gridData) }),
      speed
    );
    return () => window.clearTimeout(timerId.current);
  });

  return (
    <div>
    <button className="go btn" onClick={() => dispatch({ type: "running" })}>
      Run Animation
    </button>
  </div>
  );
}

export default Run;
