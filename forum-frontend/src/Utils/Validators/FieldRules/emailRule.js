import emailRule from "../Rules/emailRule";
import nonEmptyRule from "../Rules/nonEmptyRule";

const emailFieldRule = {
    name: "email",
    rules: [nonEmptyRule, emailRule],
  };
export default emailFieldRule;