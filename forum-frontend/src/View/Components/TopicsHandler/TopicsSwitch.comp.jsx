import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import RouteWithTopic from "../RouteWithTopic";
import TopicContent from "../TopicContent";

export default function TopicsSwitch({ topics, defaultTopic }) {
  return (
    // <Switch>
    <>
      {topics.map((topic, index) => (
        <RouteWithTopic key={index} uri={topic.uri} />
      ))}
      <Route>{defaultTopic}</Route>
    </>
    // </Switch>
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
      posts: PropTypes.array.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ),
  defaultTopic: PropTypes.element,
};

TopicsSwitch.defaultProps = {
  topics: [],
  defaultTopic: NoTopics,
};
