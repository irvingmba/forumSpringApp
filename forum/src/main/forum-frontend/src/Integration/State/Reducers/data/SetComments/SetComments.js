function setComments(state, action) {
  const { payload } = action;
  state.selectedComments = payload;
  return state;
}

export default setComments;
