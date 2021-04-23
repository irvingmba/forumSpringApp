import { useDispatch, useSelector } from "react-redux";
import signUpAct from "../../../Integration/Sagas/SignUp/signUpAct";
import compose from "../../../Utils/Functional/compose";
import SignUpForm from "../../Components/SignUpForm";
import { operationsActions } from "../../../Integration/State/Reducers/operations";
import { signUpNS } from "../../../Integration/State/InitialState/operations";
import { Redirect } from "react-router-dom";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes/Routes";
import { OP_OK } from "../../../Integration/State/Reducers/operations/OperationStates";

function SignUpPage() {
  const dispatch = useDispatch();

  dispatch(operationsActions.signUpOp(""));
  const signUpState = useSelector((state) => {
    return state[signUpNS];
  });
  const signedUp =
    signUpState && "status" in signUpState && signUpState["status"] === OP_OK;
  const send2Saga = compose(dispatch, signUpAct);

  return (
    <>
      <SignUpForm submitTo={send2Saga} />
      {signedUp && <Redirect to={ROUTE_SIGNIN} />}
    </>
  );
}

export default SignUpPage;
