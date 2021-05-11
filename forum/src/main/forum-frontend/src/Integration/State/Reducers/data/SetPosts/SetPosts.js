import { isObject } from "../../../../../Utils/Validators/functions";

function setPosts(state, action){
    const {payload} = action;
    if(!isObject(payload) && !("id" in payload) && !("posts" in payload)) return state;
    const id = payload.id;
    state.topics.map(topic=>{
        if(topic.topicId === id){
            topic.posts = payload.posts;
        }
    });
    return state;
};

export default setPosts;