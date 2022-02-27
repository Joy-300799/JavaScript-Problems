const arr = [3, 4, 1, 7, 8, 5, 6, 2];
//calculate the sum of even elements and product of odd elements.

function calc(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    } else {
      product *= arr[i];
    }
  }
  console.log(`product :`, product);
  console.log(`Sum :`, sum);
}
console.log(calc(arr));

//(arr[i % 2 != 0])