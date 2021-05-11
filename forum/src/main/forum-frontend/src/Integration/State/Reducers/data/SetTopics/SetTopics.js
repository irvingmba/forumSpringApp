function setTopics(state, action) {
  const { payload } = action;
  if (!Array.isArray(payload)) return state;
  return {...state, topics: payload }
}

export default setTopics;