import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "../../Sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(sagas);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../Reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
}
