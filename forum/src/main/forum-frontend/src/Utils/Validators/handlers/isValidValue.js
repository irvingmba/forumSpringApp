function isValidValue(rules, value, callback = null) {
    if(!Array.isArray(rules)) throw new TypeError("Rules must be in an array");
  for (const rule of rules) {
    const { validator, condition, message } = rule;
    if (typeof validator !== "function")
      throw new TypeError("Validator is not a function");
    if (validator(value) !== condition) {
      if (callback && typeof callback === "function") callback(message);
      return false;
    }
  }
  return true;
}

export default isValidValue;
