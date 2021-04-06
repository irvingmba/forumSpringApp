import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./materialStyles";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useLocation } from "react-router-dom";
import {
  ROUTE_ROOT,
  ROUTE_SIGNIN,
  ROUTE_SIGNUP,
} from "../../../Integration/Router/Routes/Routes";
import PropTypes from "prop-types";

const useStyles = styles;

export default function NavBar({ signed = false }) {
  const { pathname } = useLocation();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            className={classes.link}
            to={ROUTE_ROOT}
            aria-label="Go to main page"
          >
            <ForumIcon className={classes.icon} aria-label="Forum logo" />
            <Typography variant="h6" className={classes.title}>
              My Forum
            </Typography>
          </Link>
          {pathname !== ROUTE_SIGNUP && !signed && (
            <Link to={ROUTE_SIGNUP}>
              <Button color="inherit">Sign up</Button>
            </Link>
          )}
          {pathname !== ROUTE_SIGNIN && !signed && (
            <Link to={ROUTE_SIGNIN}>
              <Button color="inherit">Sign in</Button>
            </Link>
          )}
          {pathname !== ROUTE_ROOT && (
            <Link to={ROUTE_ROOT}>
              <Button color="inherit">Home</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  signed: PropTypes.bool,
};
