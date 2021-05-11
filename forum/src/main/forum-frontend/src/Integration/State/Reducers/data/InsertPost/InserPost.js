function insertPost(state, action) {
  const { payload } = action;
  const { topicId } = payload;
  state.topics.map((topic) => {
    if (topic.topicId === topicId) {
        topic.posts.unshift(payload);
    }
  });
  return state;
}

export default insertPost;
