/* Write a function which takes an array and prints the majority element (if it exists), otherwise prints “No Majority Element”. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). */

// Link - https://www.geeksforgeeks.org/majority-element/

const arr = [2, 2, 4, 3, 4, 3, 4, 4, 4];

function findMajority(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj)

  //1st approach
  let max = -Infinity;
  let key = -Infinity;

  // for (i in obj) {
  //   if (obj[i] > max) {
  //     max = obj[i];
  //     key = i;
  //   }
  // }
  // return key;


  //2nd approach
  const keys = Object.keys(obj)
  const val = Object.values(obj)

  // const maxRep = val.indexOf(Math.max(...val))
  return keys[val.indexOf(Math.max(...val))]

  // console.log(maxRep)
  // return keys[maxRep]
}
console.log(findMajority(arr));
