import { createSlice } from "@reduxjs/toolkit";
import { operationsState } from "../../InitialState/index";
import signUpOp from "./SignUpOp";
import signInOp from "./SignInOp";

const operationsSlice = createSlice({
    name: "operations",
    initialState: operationsState,
    reducers: {
        signUpOp,
        signInOp
    }
});

export default operationsSlice;