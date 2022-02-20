// Given a sorted array with possibly duplicate elements,
// the task is to find indexes of first and last occurrences of an element
// x in the given array.

//Link - https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
x = 5;
// Output : First Occurrence = 2
//  Last Occurrence = 5

function fAndLast(arr, x) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      arr1.push(i);
    }
  }
  return ` First Occurance : ${arr1[0]} & Last Occurrence : ${
    arr1[arr1.length - 1]
  }`;
}
console.log(fAndLast(arr,x));
