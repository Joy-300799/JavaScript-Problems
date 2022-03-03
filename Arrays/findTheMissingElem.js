//find the missing element from the array.

const arr = [33, 34, 35, 37, 38];

function findMissing(arr) {
  let len = arr.length;
  let total = 0;

  for (let i in arr) {
    total = total + arr[i];
  }

  firstDigit = arr[0];
  let lastDigit = arr.pop();
  consecutiveSum = ((len + 1) * (firstDigit + lastDigit)) / 2;
  let missingNumber = consecutiveSum - total;
  return missingNumber;
}

console.log(findMissing(arr))
