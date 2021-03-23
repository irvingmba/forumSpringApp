import { isObject } from "../Validators/functions";

export default function hasProps(props, obj) {
  if (!Array.isArray(props) || !isObject(obj))
    throw new TypeError("You must provide valid parameters");
  return props.every((prop) => prop in obj);
}
