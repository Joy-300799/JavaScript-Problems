// Link - https://www.geeksforgeeks.org/find-subarray-with-given-sum/

const arr = [1, 4, 20, 3, 10, 5];
const sum = 33;

function subArray(arr,sum){
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      add += (arr[i] + arr[j]);
      console.log(add);
      if (add > sum) {
       break;
      }
    }
  }
  return ;
};

console.log(subArray(arr, sum));
// console.log(`Sum found between indexes ${i} and ${j}`) ;