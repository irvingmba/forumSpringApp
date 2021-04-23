import slice from "./operationsReducer";

export const operationsReducer = slice.reducer;
export const operationsActions = slice.actions; 

export * as opStates from "./OperationStates";
