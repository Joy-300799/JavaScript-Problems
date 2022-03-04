// Rotate an array cyclically.
//output - [6,1,2,3,4]

const arr = [1, 2, 3, 4, 6];
// Output: arr[] = {5, 1, 2, 3, 4}
function rotateArray(arr) {
  let n = arr.length;
  let x = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
  return arr;
}
console.log(rotateArray(arr));
