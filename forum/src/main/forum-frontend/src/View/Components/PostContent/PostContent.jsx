import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../../Integration/Sagas/CreateComment";
import compose from "../../../Utils/Functional/compose";
import AddComment from "../AddComment";
import FeaturedPost from "../FeaturedPost";

function PostContent({ post = {} }) {
  const comments = useSelector((state) => {
    return state.data.selectedComments;
  });

  const profile = useSelector((state) => {
    console.log(state.data);
    return state.data.profile;
  });
  const signedin = profile && profile.signedin ? true : false;

  const dispatch = useDispatch();
  const send2Saga = compose(dispatch, createCommentAction);

  return post ? (
    <>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.description}</Typography>
      {signedin && <AddComment submitTo={send2Saga} post={post} />}
      {comments && comments.length
        ? comments.map((comment, index) => {
            const post = { ...comment, p_date: comment.r_date };
            return <FeaturedPost key={index} post={post} />;
          })
        : null}
    </>
  ) : null;
}

PostContent.propTypes = {
  post: PropTypes.object,
};

PostContent.defaultProps = {
  post: {},
};

export default PostContent;
