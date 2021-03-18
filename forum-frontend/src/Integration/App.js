import SignInPage from "../View/Pages/SignIn/SigInPage.comp";
import SignUpPage from "../View/Pages/SignUp/SignUpPage.comp";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ROUTE_SIGNUP } from "./Router/Routes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={ROUTE_SIGNUP}>
            <SignUpPage />
          </Route>
          <Route>
            <SignInPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
