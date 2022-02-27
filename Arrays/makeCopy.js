const arr = [1, 2, 3, 4, 5];
//Copy the elemets of the array into new Array.

function copy(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function copy(arr) {
  const newArr = [];
  return arr.map((ele) => newArr.push(ele));
}

function copy(arr) {
  const newArr = [...arr];
  return newArr;
}

console.log(copy(arr));
