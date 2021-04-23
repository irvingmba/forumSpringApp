function signInOp(state, action) {
  const { payload } = action;
  return typeof payload !== "string"
    ? state
    : { ...state, signup: { status: payload } };
}

export default signInOp;
