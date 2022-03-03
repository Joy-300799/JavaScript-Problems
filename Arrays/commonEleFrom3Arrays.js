//find common elements from three arrays using for loop

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4];
const arr3 = [2, 6];

function findCommon(arr1, arr2, arr3) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
          res.push(arr1[i]);
        }
      }
    }
  }
  return res;
}
console.log(findCommon(arr1, arr2, arr3));
