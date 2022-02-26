//Reverse string
const str = "Hy hello world";

function rev(str) {
  let x = str.split(" ").reverse();
  let z = x.map((x) => x.split("").reverse().join(""));
  return z.join(" ");
}

console.log(rev(str));

//reverse an array
const arr = [5, 6, 7, 4, 2, 4, 5, 8, 0];

function revArr(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(revArr(arr));
