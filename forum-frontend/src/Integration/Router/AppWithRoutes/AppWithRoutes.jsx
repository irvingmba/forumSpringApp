import { Container, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../../View/Components/NavBar";
import Main from "../../../View/Pages/Main/Main.comp";
import SignInPage from "../../../View/Pages/SignIn/SigInPage.comp";
import SignUpPage from "../../../View/Pages/SignUp/SignUpPage.comp";
import { ROUTE_SIGNIN, ROUTE_SIGNUP } from "../Routes/Routes";

export default function AppWithRoutes() {
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
            <Main />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
