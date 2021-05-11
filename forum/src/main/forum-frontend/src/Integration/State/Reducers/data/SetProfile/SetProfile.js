function setProfile(state, action){
    const {payload} = action;
    state.profile = payload;
    return state;
}

export default setProfile;