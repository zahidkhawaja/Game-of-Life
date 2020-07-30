import React, { useEffect, useRef } from "react";
import { determineLife } from "../utils/gamelogic";

function Run({ dispatch, gridData }) {
  const timerId = useRef(null);
  
  useEffect(() => {
    timerId.current = window.setTimeout(
      () => dispatch({ type: "run", payload: determineLife(gridData) }),
      200
    );
    return () => window.clearTimeout(timerId.current);
  });

  return (
    <button className="go btn" onClick={() => dispatch({ type: "running" })}>
      Run Animation
    </button>
  );
}

export default Run;
