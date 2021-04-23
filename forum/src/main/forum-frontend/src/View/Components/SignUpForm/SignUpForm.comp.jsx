import React, { useReducer } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./materialStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes/Routes";
import isValidFormData from "../../../Utils/Validators/handlers/isValidFormData";
import usernameRule from "../../../Utils/Validators/FieldRules/usernameRule";
import passwordRule from "../../../Utils/Validators/FieldRules/passwordRule";
import emailFieldRule from "../../../Utils/Validators/FieldRules/emailRule";
import handleInputData from "../../../Utils/eventHelpers/handleInputData";
import extractValues from "../../../Utils/Formatters/ExtractValues";

const useStyles = styles;

export default function SignUpForm({ submitTo }) {
  const nameUsername = "username";
  const nameEmail = "email";
  const namePassword = "password";
  const labelPassword = "Password";

  const [formState, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const submit = (e) => {
    e.preventDefault();
    if (
      isValidFormData(
        [usernameRule, emailFieldRule, passwordRule],
        formState,
        dispatch
      ) &&
      submitTo
    ) {
      submitTo(formState);
    }
  };

  const classes = useStyles();

  return (
    <Container component="form" maxWidth="xs" onSubmit={submit}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
              }
              helperText={
                nameUsername in formState && "error" in formState[nameUsername]
                  ? formState[nameUsername]["error"]
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id={nameEmail}
              label="Email Address"
              name={nameEmail}
              autoComplete="email"
              onChange={handleInputData(dispatch)}
              error={nameEmail in formState && "error" in formState[nameEmail]}
              helperText={
                nameEmail in formState && "error" in formState[nameEmail]
                  ? formState[nameEmail]["error"]
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
              }
              helperText={
                namePassword in formState && "error" in formState[namePassword]
                  ? formState[namePassword]["error"]
                  : ""
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to={ROUTE_SIGNIN}>
              <Typography variant="body2">
                {"Already have an account? Sign in"}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

SignUpForm.propTypes = {
  submitTo: PropTypes.func,
};

SignUpForm.defaultProps = {
  submitTo: null,
};
