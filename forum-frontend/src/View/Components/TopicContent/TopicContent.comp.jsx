import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import FeaturedPost from "../FeaturedPost";

export default function TopicContent({ title, posts }) {
  return (
    <div role="feed">
      <Typography variant="h3">{`Welcome to ${title} topic`}</Typography>
      {/* <FeaturedPost /> */}
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
