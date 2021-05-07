import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function CondRedirect({ to, condition }) {
  return condition && <Redirect to={to} />;
}

CondRedirect.propTypes = {
  to: PropTypes.string,
  condition: PropTypes.bool,
};

CondRedirect.defaultProps = {
  to: null,
  condition: false,
};

export default CondRedirect;
