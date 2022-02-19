let arr = ["hi", "hi", "hello", "hello", "hi", "home", "horse"];

function uniqueStr() {
  let obj = {};
  let output = [];

  //Counting frequencies of every elements of array
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  //using for-in loop in obj to check if the value of the property is greater than 1, then push it to output array.
  for (let i in obj) {
    if (obj[i] > 1) {
      output.push(i);
    }
  }
  return output;
}

console.log(uniqueStr(arr));
