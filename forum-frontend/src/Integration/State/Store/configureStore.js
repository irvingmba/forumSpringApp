import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers";

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../Reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
}
