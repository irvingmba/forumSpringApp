import isObject from "../Validators/functions/isObject";

export default function addProp2Obj(obj, prop, value) {
  if (!isObject(obj) || typeof prop !== "string")
    throw new TypeError("You must pass a proper object or property");
  return { ...obj, [prop]: value };
}
