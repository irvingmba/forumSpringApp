import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_ROOT } from "../../../Integration/Router/Routes/Routes";
import signInAct from "../../../Integration/Sagas/SignIn/SignInAct";
import { signInNS } from "../../../Integration/State/InitialState/operations";
import { operationsActions } from "../../../Integration/State/Reducers/operations";
import { OP_OK } from "../../../Integration/State/Reducers/operations/OperationStates";
import compose from "../../../Utils/Functional/compose";
import CondRedirect from "../../Components/ConRedirect";
import SignInForm from "../../Components/SignInForm";

export default function SignInPage() {
  const dispatch = useDispatch();

  const [init, setInit] = useState(false);

  if (!init) {
    dispatch(operationsActions.signInOp(""));
    setInit(true);
  }

  const signInOk = useSelector((state) => {
    const selected = state.operations[signInNS];
    console.log(state);
    return selected && "status" in selected && selected["status"] === OP_OK;
  });
  const send2Saga = compose(dispatch, signInAct);

  return (
    <>
      <SignInForm submitTo={send2Saga} />
      <CondRedirect to={ROUTE_ROOT} condition={signInOk} />
    </>
  );
}
