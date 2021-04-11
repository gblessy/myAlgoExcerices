function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  const numArray1 = numberToArray(num1);
  const numArray2 = numberToArray(num2);

  if (numArray1.length !== numArray2.length) return false;

  const digitsMap = {};
  for (let i = 0; i < numArray1.length; i++) {
    if (digitsMap[numArray1[i]]) {
      digitsMap[numArray1[i]] += 1;
    } else {
      digitsMap[numArray1[i]] = 1;
    }
  }

  for (let i = 0; i < numArray2.length; i++) {
    if (digitsMap[numArray2[i]] && digitsMap[numArray2[i]] > 1) {
      digitsMap[numArray2[i]] -= 1;
    } else if (digitsMap[numArray2[i]] === 1) {
      delete digitsMap[numArray2[i]];
    } else {
      return false;
    }
  }

  if (Object.keys(digitsMap).length === 0) return true;
  return false;
}

function numberToArray(num) {
  return num.toString().split("");
}

console.log(sameFrequency(182, 281), "true");
console.log(sameFrequency(34, 14), "false");
console.log(sameFrequency(3589578, 5879385), "true");
console.log(sameFrequency(22, 222), "false");
