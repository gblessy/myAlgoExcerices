// Complete the plusMinus function below.
function plusMinus(arr) {
  function generateProportion(quantity, length) {
    const proportion = quantity / length;
    return proportion.toPrecision(6);
  }
  const containerObject = {
    positive: 0,
    negative: 0,
    zero: 0,
  };
  arr.forEach((number) => {
    if (number > 0) {
      containerObject.positive++;
    } else if (number < 0) {
      containerObject.negative++;
    } else {
      containerObject.zero++;
    }
  });
  const { positive, negative, zero } = containerObject;
  const resultArray = [positive, negative, zero].map((number) => {
    return generateProportion(number, arr.length);
  });

  return resultArray;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
