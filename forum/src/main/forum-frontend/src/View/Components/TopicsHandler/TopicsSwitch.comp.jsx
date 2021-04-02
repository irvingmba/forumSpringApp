import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
// import RouteWithTopic from "../RouteWithTopic";
import TopicContent from "../TopicContent";

export default function TopicsSwitch({ topics, defaultTopic }) {
  return (
    <Switch>
      {topics.length &&
        topics.map(({ uri, title }, index) => (
          <Route key={uri + index.toString()} path={uri}>
            <TopicContent title={title}  />
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
};

TopicsSwitch.defaultProps = {
  topics: [],
  defaultTopic: NoTopics,
};
