let string = "Hello World! How are you?";

//expected - h-2, e-2, l-3, w-2, o-4, r-2

function duplicate(string) {
  let splitStr = string.toLowerCase().split(" ").join("");
  let againSplit = splitStr.split("");
  // console.log(againSplit)
  let obj = {};
  for (let i = 0; i < againSplit.length; i++) {
    if (obj.hasOwnProperty(againSplit[i])) {
      obj[againSplit[i]]++;
    } else {
      obj[againSplit[i]] = 1;
    }
  }
  //   console.log(obj)
  let str = "";
  for (const key in obj) {
    if (obj[key] > 1) {
      str+=(`${key} ${obj[key]}`);
      str+='\n'
    }
  }
  return str;
}

console.log(duplicate(string));
