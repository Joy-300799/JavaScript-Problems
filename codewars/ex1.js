// link - https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript

let n = 92;
let p = 1;

function digPow(n, p) {
  const sp = n.toString().split("").map(Number);
  // console.log(sp);
  let res = 0;
  for (let i = 0; i < sp.length; i++) {
    res += sp[i] ** p;
    p++;
  }
  let k = res / n;
  if(res % n !=0 ){
    return -1;
  }
  return k;
}

console.log(digPow(n, p));
