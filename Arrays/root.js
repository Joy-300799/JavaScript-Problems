const arr = [25,81,225,8];
// calculate the sum of sq. root of the max value and cb. root of the min value.

function sumOfRoots(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

//   console.log(max,"maximum value")
//   console.log(min,"minimum value")
  
  let sqRt = Math.sqrt(max);
  let cbRt = Math.cbrt(min);

//   console.log(sqRt,"sqrt")
//   console.log(cbRt,"cbrt")

  return sqRt + cbRt;
}
console.log(sumOfRoots(arr));
