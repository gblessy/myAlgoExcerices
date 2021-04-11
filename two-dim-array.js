const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arr1 = [
  [10, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
  [7, 8, 9, 10],
];
console.table(arr1);

// console.log(arr1[0][0]);
// console.log(arr1[1][1]);
// console.log(arr1[2][2]);
// console.log(arr1[3][3]);

// console.log(">>>>>>>>>>>>");

// console.log(arr1[3][0]);
// console.log(arr1[2][1]);
// console.log(arr1[1][2]);
// console.log(arr1[0][3]);

function diagonalDifference(arr) {
  function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  const numberPairs1 = [...range(0, arr.length - 1)];
  const numberPairs2 = numberPairs1.slice().reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const number1 = arr[numberPairs1[i]][numberPairs1[i]];
    const number2 = arr[numberPairs1[i]][numberPairs2[i]];
    sum += number1 - number2;
  }

  return Math.abs(sum);
}

// console.log(diagonalDifference(arr));
console.log(diagonalDifference(arr1));
// console.log(arr1.length);
