export default function compose(...fns) {
  if (!fns.length) throw new Error("You must pass a function");
  return fns.reduceRight(
    (prevFn, nextFn) => {
      if (typeof prevFn !== "function" || typeof nextFn !== "function")
        throw new TypeError("You must supply functions only");
      return (...args) => nextFn(prevFn(...args));
    },
    (value) => value
  );
}
