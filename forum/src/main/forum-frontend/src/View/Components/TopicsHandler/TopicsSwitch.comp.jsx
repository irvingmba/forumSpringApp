import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Route, Switch, useLocation } from "react-router-dom";
import TopicContent from "../TopicContent";

export default function TopicsSwitch({ topics, defaultTopic, post }) {

  return (
    <Switch>
      {topics.length &&
        topics.map(({ title }, index) => (
          <Route key={title + index.toString()} path={`/${title.toLowerCase()}`}>
            {!post && <TopicContent title={title}  />}
          </Route>
        ))}
      <Route>{defaultTopic}</Route>
    </Switch>
  );
}

function NoTopics() {
  return (
    <Typography variant="subtitle2" paragraph>
      Customize this topic displayer properly
    </Typography>
  );
}

TopicsSwitch.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      posts: PropTypes.array,
      uri: PropTypes.string,
    })
  ),
  defaultTopic: PropTypes.element,
  post: PropTypes.string
};

TopicsSwitch.defaultProps = {
  topics: [],
  defaultTopic: NoTopics,
};
