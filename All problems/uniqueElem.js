let arr = [1, 2, 3, 1, 4, 4]
//return unique. [1,2,3,4]

let i = 0;
let obj = {};


function unique(arr) {

    if (arr.length === 0) { return [] }

    obj.hasOwnProperty(arr[i]) ? obj[arr[i]]++ : obj[arr[i]] = 1;
    i++;

    if (i === arr.length) { return; }
    unique(arr);
    return Object.keys(obj).map(Number)
}

console.log(unique(arr))
