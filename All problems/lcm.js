//program to find the LCM of two numbers

//first we need to find the hcf or gcf of the input, then we will calculate the lcm.
function lcm(a, b) {
  let hcf;
  for (let i = 0; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      hcf = i;
    }
  }

  //calculate LCM
  let lcm = (a * b) / hcf;
  return lcm;
}

console.log(lcm(6, 10));


//find lcm of two numbers
function lcm(a, b) {
    // let min = (a > b) ? b : a;
    let min = Math.min(a, b);
    for (var i = min; i <= a * b; i++) {
      if (i % a == 0 && i % b == 0) {
        break;
      }
    }
    return i;
  }
  console.log(lcm(15, 20));