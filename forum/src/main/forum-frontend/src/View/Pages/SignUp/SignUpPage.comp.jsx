import { useDispatch, useSelector } from "react-redux";
import compose from "../../../Utils/Functional/compose";
import SignUpForm from "../../Components/SignUpForm";
import { operationsActions } from "../../../Integration/State/Reducers/operations";
import { signUpNS } from "../../../Integration/State/InitialState/operations";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes/Routes";
import { OP_OK } from "../../../Integration/State/Reducers/operations/OperationStates";
import CondRedirect from "../../Components/ConRedirect";
import { useState } from "react";
import signUpAct from "../../../Integration/Sagas/SignUp/signUpAct";

function SignUpPage() {
  const dispatch = useDispatch();

  const [init, setInit] = useState(false);

  if (!init) {
    dispatch(operationsActions.signUpOp(""));
    setInit(true);
  };

  const signUpState = useSelector((state) => {
    const selected = state.operations[signUpNS];
    return selected && "status" in selected && selected["status"] === OP_OK;
  });
  const send2Saga = compose(dispatch, signUpAct);

  return (
    <>
      <SignUpForm submitTo={send2Saga} />
      <CondRedirect to={ROUTE_SIGNIN} condition={signUpState} />
    </>
  );
}

export default SignUpPage;
