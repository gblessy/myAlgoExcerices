function timeConversion(s) {
  const numberEnd = s.length - 2;
  let hour = +s.substring(0, 2);

  if (s.substring(numberEnd) === "AM") {
    if (hour === 12) {
      hour = "00";
    } else {
      hour = s.substring(0, 2);
    }
  } else {
    if (hour === 12) {
      return `${hour}${s.substring(2, numberEnd)}`;
    } else {
      hour = hour + 12;
      if (hour === 24) {
        hour = "00";
      }
    }
  }
  return `${hour}${s.substring(2, numberEnd)}`;
}

console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("01:01:00AM"));
console.log(timeConversion("02:01:00AM"));
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("01:01:00PM"));
console.log(timeConversion("02:01:00PM"));
