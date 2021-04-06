export default function isEmpty(input="") {
  if (typeof input !== "string" && typeof input !== "number")
    throw new TypeError("Input not readable");
  if (input.length === 0) {
    return true;
  }
  return false;
}
