function selectPost(state, action) {
  const { payload } = action;
  state.selectedPost = payload;
  return state;
}

export default selectPost;