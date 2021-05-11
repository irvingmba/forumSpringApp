import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createPostAct from "../../../Integration/Sagas/CreatePost/CreatePostAct";
import { getPostsAction } from "../../../Integration/Sagas/GetPosts";
import { dataActions } from "../../../Integration/State/Reducers/data";
import compose from "../../../Utils/Functional/compose";
import AddPost from "../AddPost/AddPost";
import FeaturedPost from "../FeaturedPost";
import PostContent from "../PostContent";

export default function TopicContent({ title }) {
  const dispatch = useDispatch();

  const [init, setInit] = useState(false);

  const topicState = useSelector((state) =>
    state.data.topics.find(
      (topic) => topic.title.toLowerCase() === title.toLowerCase()
    )
  );

  const selectedPost = useSelector((state) => {
    return state.data.selectedPost;
  });

  const profile = useSelector((state) => {
    return state.data.profile;
  });
  const signedin = profile && profile.signedin ? true : false;

  const posts = topicState.posts || [];

  if (!init) {
    dispatch(getPostsAction(topicState.topicId));
    dispatch(dataActions.selectPost(null));
    setInit(true);
  }

  const addId = (obj) => ({ ...obj, topicId: { value: topicState.topicId } });

  const send2Saga = compose(dispatch, createPostAct, addId);

  return !selectedPost ? (
    <div role="feed">
      <Typography variant="h3">{`Welcome to ${title
        .toString()
        .toLowerCase()} topic`}</Typography>
      {posts.length
        ? posts.map((post, index) => {
            const reshaped = {
              ...post,
              link: post.post_id.toString(),
            };
            console.log(post);
            return <FeaturedPost key={post.title + index} post={reshaped} />;
          })
        : null}
      {signedin && <AddPost submitTo={send2Saga} />}
    </div>
  ) : (
    <PostContent post={selectedPost} />
  );
}

TopicContent.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array,
};

TopicContent.defaultProps = {
  title: "Unknown topic",
  posts: [],
};
