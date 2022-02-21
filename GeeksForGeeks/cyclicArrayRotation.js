// Link - https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/

let arr = [1, 2, 3, 4, 5];
//output - [ 5, 1, 2, 3, 4 ]

let x = arr[arr.length - 1];
arr.unshift(arr.pop());
console.log(arr);
