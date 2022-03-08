//Multiply function without using * operator.

let num1 = 5;
let num2 = 3;

function Multiply(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  } else {
    console.log(num1);
    return num1 + Multiply(num1, num2 - 1);
  }
}
console.log(Multiply(num1,num2))


