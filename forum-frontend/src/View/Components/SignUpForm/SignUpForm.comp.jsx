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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes";
import isValidFormData from "../../../Utils/Validators/handlers/isValidFormData";
import usernameRule from "../../../Utils/Validators/FieldRules/usernameRule";
import passwordRule from "../../../Utils/Validators/FieldRules/passwordRule";
import emailFieldRule from "../../../Utils/Validators/FieldRules/emailRule";
import handleInputData from "../../../Utils/eventHelpers/handleInputData";

const useStyles = styles;

export default function SignUpForm({ submitTo = null }) {
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
    console.log(formState);
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
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleInputData(dispatch)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleInputData(dispatch)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
