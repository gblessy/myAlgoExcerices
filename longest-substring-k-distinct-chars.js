const longest_substring_with_k_distinct = function (str, k) {
  const charFrequency = {};
  let windowStart = 0;
  let logestLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let lastLetter = str[windowEnd];
    if (!(lastLetter in charFrequency)) {
      charFrequency[lastLetter] = 0;
    }
    charFrequency[lastLetter]++;

    while (Object.keys(charFrequency).length > k) {
      let firstLetter = str[windowStart];
      charFrequency[firstLetter]--;
      if (charFrequency[firstLetter] === 0) {
        delete charFrequency[firstLetter];
      }
      windowStart++;
    }

    logestLength = Math.max(logestLength, windowEnd - windowStart + 1);
  }

  return logestLength;
};

console.log(longest_substring_with_k_distinct("araaci", 1), "Should be 2");
console.log(longest_substring_with_k_distinct("araaci", 2), "Should be 4");
