function insertComment(state, action) {
  const { payload } = action;
  state.selectedComments.unshift(payload);
  return state;
}

export default insertComment;
