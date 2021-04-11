function buildLine(totalLength, hashtags) {
  const spacesLength = totalLength - hashtags;
  let spacesArr = new Array(spacesLength).fill(" ");
  let hashtagsArr = new Array(hashtags).fill("#");
  return [...spacesArr, ...hashtagsArr];
}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const arr = buildLine(n, i);
    console.log(arr.join(""));
  }
}

staircase(4);
