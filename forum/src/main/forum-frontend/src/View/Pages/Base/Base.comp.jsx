import { Container, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../Components/NavBar";
import { mainPost } from "../../Content";
import Main from "../Main/Main.comp";
import SignInPage from "../SignIn/SigInPage.comp";
import SignUpPage from "../SignUp/SignUpPage.comp";
import {
  ROUTE_SIGNIN,
  ROUTE_SIGNUP,
} from "../../../Integration/Router/Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { getTopicsAction } from "../../../Integration/Sagas/GetTopics";
import { getPostsAction } from "../../../Integration/Sagas/GetPosts";

export default function Base() {
  const dispatch = useDispatch();
  dispatch(getTopicsAction());

  const profile = useSelector((state) => {
    return state.data.profile;
  });

  const signedin = profile && profile.signedin ? true : false;

  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <NavBar signed={signedin} />
        <Switch>
            <Route path={ROUTE_SIGNUP}>
              <SignUpPage />
            </Route>
          <Route path={ROUTE_SIGNIN}>
            <SignInPage />
          </Route>
          <Route>
            <Main
              mainPost={mainPost}
              // topics={sections}
            />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
