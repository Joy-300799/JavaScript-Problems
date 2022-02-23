const arr = [1, 3, 4, 5, -1, -7, -5, 8, -4];

function sumOfNeg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfNeg(arr));

function countNeg(arr) {
    console.log(arr.filter(x => x < 0).length)
}

countNeg(arr)
