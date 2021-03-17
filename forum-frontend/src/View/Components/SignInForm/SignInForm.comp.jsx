import React, { useReducer } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./materialStyles";
import { Link as RouteLink } from "react-router-dom";
import { ROUTE_SIGNUP } from "../../../Integration/Router/Routes";
import handleInputData from "../../../Utils/eventHelpers/handleInputData";
import PropTypes from "prop-types";
import { isValidFormData } from "../../../Utils/Validators/handlers";
import usernameRule from "../../../Utils/Validators/FieldRules/usernameRule";
import passwordRule from "../../../Utils/Validators/FieldRules/passwordRule";

const useStyles = styles;

export default function SignInForm({ submitTo = null }) {
  const labelPassword = "Password";

  const [formState, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const submit = (e) => {
    e.preventDefault();
    isValidFormData([usernameRule, passwordRule], formState);
    if (submitTo) {
      submitTo(formState);
    }
  };

  const classes = useStyles();

  return (
    <Container component="form" maxWidth="xs" onSubmit={submit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleInputData(dispatch)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={labelPassword}
          aria-label={labelPassword}
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleInputData(dispatch)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <RouteLink to={ROUTE_SIGNUP}>
              <Typography variant="body2">
                {"Don't have an account? Sign Up"}
              </Typography>
            </RouteLink>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

SignInForm.propTypes = {
  submitTo: PropTypes.func,
};
