const pair_with_targetsum = function (arr, target_sum) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    if (arr[rightPointer] + arr[leftPointer] === target_sum) {
      return [leftPointer, rightPointer];
    }
    if (arr[rightPointer] + arr[leftPointer] > target_sum) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return [-1, -1];
};

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6), "Expected 1, 3");
