import addProp2Obj from "../../ForObjects/addProp2Obj";
import compose from "../../Functional/compose";
import curry from "../../Functional/curry";
import isValidValue from "./isValidValue";

function callback(fn, name, val) {
  if (typeof fn !== "function") return val;
  return fn({ [name]: val });
}

const curriedCb = curry(callback);
const curriedAdder = curry(addProp2Obj);

function isValidFormData(validators, data, notifier) {
  let isValid = true;
  if (!Array.isArray(validators))
    throw new TypeError("You must provide an array");
  for (const { name, rules } of validators) {
    const field = data && name in data ? data[name] : {};
    const setValue = curriedAdder(field, "error");
    const { value } = field;
    if (
      !isValidValue(rules, value, compose(curriedCb(notifier, name), setValue))
    ) {
      isValid = false;
    }
  }
  return isValid;
}

export default isValidFormData;
