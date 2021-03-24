import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";
import errorsReducer from "./errorsReducer";
import operationsReducer from "./operationsReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  operations: operationsReducer,
  errors: errorsReducer,
});

export default rootReducer;
