function averagePair(arr, targetAverage) {
  // add whatever parameters you deem necessary - good luck!
  const quantityOfElements = 2;

  if (arr.length < quantityOfElements) return false;

  const targetSum = targetAverage * quantityOfElements;
  let index = 0;
  const diffContainer = {};

  while (arr[index] < targetAverage || index < arr.length) {
    diffContainer[targetSum - arr[index]] = 1;
    index++;
  }
  const diffLength = Object.keys(diffContainer).length;
  for (let i = 0; i < diffLength; i++) {
    if (arr[i] in diffContainer) return true;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5), "true");
console.log(averagePair([1, 2, 3, 5, 6, 7, 10, 12, 19], 8), "true");
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1), "false");
console.log(averagePair([], 4), "false");
