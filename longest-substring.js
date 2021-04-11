// var lengthOfLongestSubstring = function (s) {
//   let letters = {};
//   let length = 0;
//   let currentLength = 0;

//   if (s.length === 0) return length;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (!letters[s.charAt(j)]) {
//         letters[s.charAt(j)] = true;
//         currentLength++;
//         if (length < currentLength) length = currentLength;
//       } else {
//         letters = {};
//         currentLength = 0;
//         break;
//       }
//     }
//   }
//   return length;
// };

var lengthOfLongestSubstring = function (str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("jbpnbwwd"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
