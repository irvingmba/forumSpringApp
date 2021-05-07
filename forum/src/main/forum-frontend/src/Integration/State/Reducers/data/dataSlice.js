import { createSlice } from "@reduxjs/toolkit";
import { dataState } from "../../InitialState";
import setToken from "./SetToken";

const dataSlice = createSlice({
  name: "data",
  initialState: dataState,
  reducers: {
    setToken,
  },
});

export default dataSlice;
