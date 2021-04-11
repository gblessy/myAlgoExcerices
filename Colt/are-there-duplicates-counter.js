function areThereDuplicates(num) {
  // good luck. (supply any arguments you deem necessary.)
  const elementMap = {};

  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    if (element in elementMap) {
      return true;
    } else {
      elementMap[element] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3), "false");
console.log(areThereDuplicates(1, 2, 2), "true");
