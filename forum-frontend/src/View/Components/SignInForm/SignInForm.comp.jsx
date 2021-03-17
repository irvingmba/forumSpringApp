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
import isValidFormData from "../../../Utils/Validators/handlers/isValidFormData";
import usernameRule from "../../../Utils/Validators/FieldRules/usernameRule";
import passwordRule from "../../../Utils/Validators/FieldRules/passwordRule";

const useStyles = styles;

export default function SignInForm({ submitTo = null }) {
  const nameUsername = "username";
  const namePassword = "password";
  const labelPassword = "Password";

  const [formState, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const submit = (e) => {
    e.preventDefault();
    if (
      isValidFormData([usernameRule, passwordRule], formState, dispatch) &&
      submitTo
    ) {
      submitTo(formState);
    }
    console.log(formState);
  };

  const classes = useStyles();

  return (
    <Container
      component="form"
      maxWidth="xs"
      onSubmit={submit}
      noValidate={true}
    >
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
          id={nameUsername}
          label="Username"
          name={nameUsername}
          autoComplete="username"
          autoFocus
          onChange={handleInputData(dispatch)}
          error={
            nameUsername in formState && "error" in formState[nameUsername]
              ? true
              : false
          }
          helperText={
            nameUsername in formState && "error" in formState[nameUsername]
              ? formState[nameUsername].error
              : ""
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name={namePassword}
          label={labelPassword}
          aria-label={labelPassword}
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleInputData(dispatch)}
          error={
            namePassword in formState && "error" in formState[namePassword]
              ? true
              : false
          }
          helperText={
            namePassword in formState && "error" in formState[namePassword]
              ? formState[namePassword].error
              : ""
          }
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
