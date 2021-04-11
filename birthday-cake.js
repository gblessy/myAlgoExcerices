function birthdayCakeCandles(candles) {
  let highestNumber = 0;
  let highestNumberCount = 0;

  candles.forEach((candle) => {
    console.log(candle, highestNumber);
    if (candle > highestNumber) {
      highestNumber = candle;
      highestNumberCount = 1;
    } else if (candle === highestNumber) {
      highestNumberCount++;
    }
  });

  return highestNumberCount;
}

console.log(birthdayCakeCandles([1, 4, 2, 4, 3]));
