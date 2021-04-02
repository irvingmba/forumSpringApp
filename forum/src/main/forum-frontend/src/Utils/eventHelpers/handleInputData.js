export default function handleInputData(sender) {
  if (typeof sender !== "function")
    throw new TypeError("Received parameter is not a function");
  return function handleEvent(event) {
    const element = event.target;
    if (!element || !("value" in element) || !("name" in element))
      throw new TypeError("Gotten unproper element");
    const { name, value } = element;
    const elValue = { [name]: {value} };
    sender(elValue);
    return Object.freeze(elValue);
  };
}
