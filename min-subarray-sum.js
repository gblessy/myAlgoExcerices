const smallest_subarray_with_given_sum = function (s, arr) {
  let minimumLength = 9999999999999999;
  let tempSum = 0;
  let windowStart = 0;
  const hasEqual = arr.some((number) => number >= s);
  if (hasEqual) return 1;

  for (let i = windowStart; i < arr.length; i++) {
    tempSum += arr[i];
    if (tempSum > s) {
      const len = i - windowStart;
      if (len < minimumLength) {
        minimumLength = len;
      }
      tempSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minimumLength;
};

console.log(10, smallest_subarray_with_given_sum(5, [1, 2, 5, 2, 8, 1, 5]));
console.log(17, smallest_subarray_with_given_sum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(6, smallest_subarray_with_given_sum([4, 2, 1, 6], 1));
console.log(13, smallest_subarray_with_given_sum([4, 2, 1, 6, 2], 4));
console.log(null, smallest_subarray_with_given_sum([], 4));
