function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let letterCount1 = {};
  let letterCount2 = {};
  for (let char of str1) {
    letterCount1[char] = (letterCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    letterCount2[char] = (letterCount2[char] || 0) + 1;
  }

  for (let key in letterCount1) {
    if (letterCount2[key] !== letterCount1[key]) return false;
  }

  for (let key in letterCount2) {
    if (letterCount2[key] !== letterCount1[key]) return false;
  }

  return true;
}

console.log(validAnagram("anagram", "nagara"));
