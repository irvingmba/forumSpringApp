import { Provider } from "react-redux";
import AppRouter from "../../Router/AppRouter/AppRouter.comp";
import store from "../Store";

export default function AppWithState() {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
}
