function sort(arr) {
    for (var i = 1; i < arr.length; i++)
        for (var j = 0; j < i; j++)
            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
    return arr
}

let arr = [9,4,6,1,2,3,5,8,7]
console.log(sort(arr))


function sort(arr) {
    for (var i = 1; i < arr.length; i++)
        for (var j = 0; j < i; j++)
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr
}

let arr = [9, 4, 6, 1, 2, 3, 5, 8, 7]
console.log(sort(arr))