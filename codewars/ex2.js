// link - https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6

input1 = ["a*cde", "*bcde", "abc*e"];
// result = "abcde"

input2 = ["a*c**", "**cd*", "a*cd*"];
//result = "a#cd#"

input3 = [
  "*#*#*#*#*#*#*#*",
  "*#*#*#*#*#*#*#*",
  "*#*#*#*#*#*#*#*",
  "*#*#*#*#*#*#*#*",
];
//result = "#############"

// function assembleString(arr) {
//   let res = [];
//   let x = arr.map((x) => x.split(""));
//   console.log(x);
//   let index = [];
//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i].length; j++) {
//       if (x[i][j] != "*") {
//         res.push(x[i][j]);
//       } else if (x[i][j] === "*") {
//         index.push(j);
//       }
//     }
//   }

//   let obj = {};
//   for (let k = 0; k < index.length; k++) {
//     if (obj.hasOwnProperty(index[k])) {
//       obj[index[k]]++;
//     } else {
//       obj[index[k]] = 1;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] == x.length) {
//       res.splice(key, 0, "#");
//     }
//   }

//   console.log(obj, "obj");
//   console.log(index, "index");
//   return res;
// }

// console.log(assembleString(input2));


const zip = require("lodash/zip");

function assembleString(a) {
  return zip(...a.map(x => [...x])).map(x => x.find(y => y !== "*") || "#").join("")
}

console.log(assembleString(input3))