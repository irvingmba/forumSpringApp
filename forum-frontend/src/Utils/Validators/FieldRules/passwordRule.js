import emailRule from "../Rules/emailRule";
import nonEmptyRule from "../Rules/nonEmptyRule";

const passwordRule = {
  name: "password",
  rules: [nonEmptyRule, emailRule],
};

export default passwordRule;
