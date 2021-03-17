import compose from "./compose";

describe("Testing function to compose", () => {
  test("When it does not get any parameter, it throws", () => {
    expect(() => compose()).toThrow();
  });

  test("When it gets one parameter, it throws", () => {
    expect(() => compose()).toThrow();
  });

  test("When parameters are not functions it throws", () => {
    expect(() => compose(jest.fn(), {})).toThrow();
  });

  test("When parameters are are ok, it return a composed function", () => {
      const fn1 = jest.fn(a=>a+2);
      const fn2 = jest.fn(b=>b*2);
    const composed = compose(fn1, fn2);
    expect(composed).toBeDefined();
    expect(typeof composed).toEqual("function");
    expect(composed(1)).toEqual(4)
    expect(fn1).toHaveBeenCalledWith(2);
    expect(fn2).toHaveBeenCalledWith(1);
  });
});
