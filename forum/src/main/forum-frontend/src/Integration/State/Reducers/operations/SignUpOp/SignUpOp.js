import { signUpNS } from "../../../InitialState/operations";

function signUpOp(state, action) {
  const { payload } = action;
  return typeof payload !== "string"
    ? state
    : { ...state, [signUpNS]: { status: payload } };
}

export default signUpOp;
