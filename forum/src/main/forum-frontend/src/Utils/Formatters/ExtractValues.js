const { default: isObject } = require("../Validators/functions/isObject");

function extractValues(obj) {
  if (!isObject(obj)) throw new TypeError("Provide a valid object");
  const extracted = {};
  for (const key in obj) {
      const prop = obj[key];
    if (isObject(prop) && "value" in obj[key]) {
        Object.assign(extracted,{[key]:obj[key]["value"]});
    }
  }
  return extracted
}

export default extractValues;
