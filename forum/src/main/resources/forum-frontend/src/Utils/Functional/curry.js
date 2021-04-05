export default function curry(fn) {
  if (typeof fn !== "function")
    throw new TypeError("You must provide a function");
  const arity = fn.length;
  function innerFn(innerArity, args) {
    return function actualInnerFn(...a) {
      a = a.length ? a : [undefined];
      if (innerArity <= args.length + a.length) {
        return fn(...args, ...a);
      }
      return innerFn(innerArity, [...args, ...a]);
    };
  }
  return innerFn(arity, []);
}
