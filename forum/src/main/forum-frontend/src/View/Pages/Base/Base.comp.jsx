import { Container, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../Components/NavBar";
import { mainPost, sections } from "../../Content";
import Main from "../Main/Main.comp";
import SignInPage from "../SignIn/SigInPage.comp";
import SignUpPage from "../SignUp/SignUpPage.comp";
import { ROUTE_SIGNIN, ROUTE_SIGNUP } from "../../../Integration/Router/Routes/Routes";

export default function Base() {
  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route path={ROUTE_SIGNUP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTE_SIGNIN}>
            <SignInPage />
          </Route>
          <Route>
            <Main mainPost={mainPost} topics={sections} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
