import React from "react";
import PropTypes from "prop-types";
import { determineLife } from "../utils/gamelogic";

function NextGen({ state, dispatch, count, setCount }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "run", payload: determineLife(state.gridData) })
      }
      }
    >
      Next Generation
    </button>
  );
}

NextGen.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default NextGen;
