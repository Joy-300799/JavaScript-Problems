// Link - https://www.geeksforgeeks.org/find-the-first-missing-number/

/*
Given a sorted array of n distinct integers where each integer
 is in the range from 0 to m-1 and m > n. Find the smallest number 
 that is missing from the array.
 */

let arr = [0, 1, 2, 6, 9];
let m = 10;

function findSmallest(arr, m) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
  return m - 1;
}

console.log(findSmallest(arr, m));
