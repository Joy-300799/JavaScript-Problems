const input = "2133326615727117001540261141407327120031612260317493998987993857958996993904815918596499598790384428";

function ana(input) {
  let sp1 = input.split("");
  let arr1 = [];
  let arr2 = [];
  let count = 0;
  for (let i = 0; i < sp1.length / 2; i++) {
    arr1.push(sp1[i]);
  }
  for (let i = sp1.length / 2; i < sp1.length; i++) {
    arr2.push(sp1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j<=i; j++) {
        if(arr1[i] !== arr2[j]){
            count++;
        }
  }
}
//   console.log(arr1)
//   console.log(arr2)
return count;
}

console.log(ana(input));
