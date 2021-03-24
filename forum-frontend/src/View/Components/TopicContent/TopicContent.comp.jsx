import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import FeaturedPost from "../FeaturedPost";

export default function TopicContent({ title, wrapper }) {
  return (
    <div role="feed">
      <Typography variant="h3">{`Welcome to ${title
        .toString()
        .toLowerCase()} topic`}</Typography>
      {/* {posts.length ? (
        posts.map((post, index) => (
          <FeaturedPost key={title + index.toString()} post={post} />
        ))
      ) : (
        <Typography role="article" aria-label="No posts" variant="h4" paragraph>
          {"Post the first discussion"}
        </Typography>
      )} */}
    </div>
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
