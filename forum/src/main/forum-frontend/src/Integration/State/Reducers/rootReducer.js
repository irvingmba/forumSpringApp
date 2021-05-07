import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./data";
import errorsReducer from "./errorsReducer";
import {operationsReducer} from "./operations";

const rootReducer = combineReducers({
  data: dataReducer,
  operations: operationsReducer,
  errors: errorsReducer,
});

export default rootReducer;
