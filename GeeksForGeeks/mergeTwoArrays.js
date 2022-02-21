// Link - https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/

let arr1 = [1, 5, 9, 10, 15, 20];
let arr2 = [2, 3, 8, 13];

sortMerge = (arr1, arr2) => {
  let resArr = [...arr1, ...arr2];
  let sortArr = resArr.sort((a, b) => a - b);
  let lenArr1 = arr1.length;

  arr1 = sortArr.splice(0,lenArr1)
  arr2 = sortArr;
 console.log(arr1,"\n",arr2);
 return;
};
console.log(sortMerge(arr1, arr2));


