import emailRule from "../Rules/emailRule";
import nonEmptyRule from "../Rules/nonEmptyRule";

const emailFieldRule = {
    name: "password",
    rules: [nonEmptyRule, emailRule],
  };
export default emailFieldRule;