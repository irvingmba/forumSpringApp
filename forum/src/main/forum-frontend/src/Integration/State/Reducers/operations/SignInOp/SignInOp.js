import { signInNS } from "../../../InitialState/operations";

function signInOp(state, action) {
  const { payload } = action;
  return typeof payload !== "string"
    ? state
    : { ...state, [signInNS]: { status: payload } };
}

export default signInOp;
