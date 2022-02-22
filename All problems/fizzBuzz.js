/*
FizzBuzz is a task where the programmer is asked to print
 numbers from 1 to 100, but here’s the catch, multiple of 
 three should print “Fizz” and similarly print “Buzz” for 
 multiples of 5 and lastly print “FizzBuzz” for multiples 
 of three and five.
*/

let n = 100;
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz",i);
    } else if (i % 3 === 0) {
      console.log("Fizz",i);
    } else if (i % 5 === 0) {
      console.log("Buzz",i);
    }
  }
}
fizzBuzz(n);
