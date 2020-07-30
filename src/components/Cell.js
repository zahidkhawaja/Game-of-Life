import React, { memo, useEffect } from "react";
import { string, array, func } from "prop-types";

function Cell({ condition, coord, dispatch, count, setCount }) {

  const handleDispatch = () => {
    dispatch({ type: "fill", payload: coord });
  };

  if(condition == "dead") {
      setCount(count + 1);
  }

  return <div onClick={handleDispatch} className={`cell ${condition}`} />;
}

export default memo(Cell, (prev, next) => {
  return prev.condition === next.condition;
});

Cell.propTypes = {
  condition: string.isRequired,
  coord: array.isRequired,
  dispatch: func.isRequired
};
