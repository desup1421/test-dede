const invalid = function (s) {
  const arr = s.split("");
  const length = arr.length;

  if (length === 0) {
    return true;
  }

  const openA = arr.filter((el) => el === "(");
  const closeA = arr.filter((el) => el === ")");
  const openB = arr.filter((el) => el === "[");
  const closeB = arr.filter((el) => el === "]");
  const openC = arr.filter((el) => el === "{");
  const closeC = arr.filter((el) => el === "}");

  if (
    openA.length === closeA.length &&
    openB.length === closeB.length &&
    openC.length === closeC.length
  ) {
    return true;
  }
  return false;

  // for (let i = 0; i < length - 1; i++) {
  //   if (
  //     (arr[i] === "(" && arr[length - 1 - i] === ")") ||
  //     (arr[i] === "[" && arr[length - 1 - i] === "]") ||
  //     (arr[i] === "{" && arr[length - 1 - i] === "}")
  //   )
  //     return true;
  // }
  // return false;

  //   const openA = arr.findIndex((el) => el === "(");
  //   const closeA = arr.findIndex((el) => el === ")");
  //   const openB = arr.findIndex((el) => el === "[");
  //   const closeB = arr.findIndex((el) => el === "]");
  //   const openC = arr.findIndex((el) => el === "{");
  //   const closeC = arr.findIndex((el) => el === "}");

  //   if (
  //     (closeA - openA) % 2 !== 0 &&
  //     (closeB - openB) % 2 !== 0 &&
  //     (closeC - openC) % 2 !== 0
  //   )
  //     return true;

  //   return false;

  //   if ((closeB - openB) % 2 !== 0) return true;
  //   if ((closeC - openC) % 2 !== 0) return true;

  //   for (let i = 0; i < length - 1; i++) {
  //     if (
  //       (arr[i] === "(" && arr[length - 1 - i] === ")") ||
  //       (arr[i] === "[" && arr[length - 1 - i] === "]") ||
  //       (arr[i] === "{" && arr[length - 1 - i] === "}")
  //     )
  //       return true;
  //   }
  //   return false;
};

console.log(invalid("()"));
console.log(invalid("()[]{}"));
console.log(invalid("(]"));
console.log(invalid("([])"));
console.log(invalid("([)]"));
console.log(invalid(""));
console.log(invalid("()[]{"));
