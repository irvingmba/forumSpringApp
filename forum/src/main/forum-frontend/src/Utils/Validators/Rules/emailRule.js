import isEmail from "../functions/isEmail";

const emailRule = {
  validator: isEmail,
  condition: true,
  message: "You must provide a valid email",
};

export default emailRule;