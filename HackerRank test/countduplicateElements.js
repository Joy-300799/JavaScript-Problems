function countDuplicate(numbers) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (obj.hasOwnProperty(numbers[i])) {
      obj[numbers[i]]++;
    } else {
      obj[numbers[i]] = 1;
    }
  }
  console.log(obj);
  let output = [];
  for (let key in obj) {
    if (obj[key] > 1) {
      output.push(key);
    }
  }
  return output.length;
}

console.log(countDuplicate([1, 3, 3, 4, 4, 4]));
