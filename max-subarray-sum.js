function maxSubArraySum(arr, len) {
  if (len > arr.length) return null;
  let maxSum = -Infinity;
  let i = 0;
  let j = len - 1;
  for ()

  return maxSum;
}

console.log(10, maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(17, maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(6, maxSubArraySum([4, 2, 1, 6], 1));
console.log(13, maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(null, maxSubArraySum([], 4));
