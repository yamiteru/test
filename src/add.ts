export const add = (a: number, b: number) => {
  if (typeof a !== "number") {
    throw new Error("'a' is not a number");
  }

  if (typeof b !== "number") {
    throw new Error("'b' is not a number");
  }

  return a + b;
};
