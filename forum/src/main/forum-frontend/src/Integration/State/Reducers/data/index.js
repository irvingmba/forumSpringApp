import dataSlice from "./dataSlice";

const { reducer: dataReducer, actions: dataActions } = dataSlice;

export { dataActions };

export default dataReducer;
