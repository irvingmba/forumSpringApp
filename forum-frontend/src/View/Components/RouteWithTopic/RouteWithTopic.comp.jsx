import { Route } from "react-router-dom";
import PropTypes from "prop-types";

export default function RouteWithTopic({ uri }) {
  return uri && <Route path={uri}></Route>;
}

RouteWithTopic.propTypes = {
  uri: PropTypes.string,
};

RouteWithTopic.defaultProps = {
    uri: null
};
