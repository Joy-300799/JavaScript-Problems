// Link - https://www.geeksforgeeks.org/count-pairs-with-given-sum/

const arr = [1, 5, 7, -1, 5];
const sum = 6;

function targetSum(arr, sum) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        count++;
        // console.log(count);
      }
    }
  }
  return count;
}

console.log(targetSum(arr, sum));

// Request a number and send its word in response.
// Without any library, build dynamic. 
// 1 -> One , 2 -> Two ....