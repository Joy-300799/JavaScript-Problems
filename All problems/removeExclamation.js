// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(string) {
    // let arr = []
    let splitString = string.split('')
    // console.log(splitString);

    let end = splitString.length - 1;
    // if (end !== "!") {
    //     return string;
    // }
    for (let j = end; j >= 0; j--) {
        if (splitString[j] == "!") {
            splitString.pop()
        }else if(splitString[j] != "!"){
              break;
        }
    }
    return splitString.join("");
}

var a = "Hi! Hi!";
var b = "!Hi";
var c = "Hi !!!";

// function remove(s){
//     let arr =[]
//       for (let i = s.length-1; i => 0; i--){
//         if(s[i] != '!'){
//           arr.push(s.slice(0,i+1));
//           return arr.join('');
//         }  
//       }
//     }

console.log(remove(a));