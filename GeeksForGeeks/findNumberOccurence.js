// Link - https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/?ref=lbp

const arr = [5, 7, 2,7, 7, 5, 2, 5];

function countOdd(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 != 0) {
    console.log(key) ;
    }
  }
  return;
}

countOdd(arr);
