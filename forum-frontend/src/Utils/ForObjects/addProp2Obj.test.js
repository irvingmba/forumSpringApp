import addProp2Obj from "./addProp2Obj";

describe("Testing function to add a prop to an object", () => {
  test("It throws when executed without parameters", () => {
    expect(() => addProp2Obj()).toThrow();
  });

  test("Value undefined when you don't pass a value", () => {
    const prop = "prop";
    const obj = addProp2Obj({}, prop);
    expect(obj).toHaveProperty(prop);
  });

  test("Property added when everything is fine", () => {
    const prop = "prop",
      value = "value",
      obj = addProp2Obj({}, prop, value);
    expect(obj).toHaveProperty(prop, value);
  });
});
