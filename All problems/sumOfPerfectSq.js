// The task is simply stated. Given an integer n (3 < n < 109), find the length of the smallest list of perfect squares which add up to n. Come up with the best algorithm you can; you'll need it!

// Examples:
// sum_of_squares(17) = 2
// 17 = 16 + 1 (4 and 1 are perfect squares).

// sum_of_squares(15) = 4
// 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.

// sum_of_squares(16) = 1
// 16 itself is a perfect square.

function sumOfSquares(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    // return arr;
    let newArr = []
    for (let j = 0; j < arr.length; j++) {
        let sq = Math.sqrt(arr[j])
        if (sq % 1 === 0) {
            newArr.push(arr[j])
        }
    }
    // return newArr;
    let sum = newArr.reduce((x, y) => x + y)
    if(sum == n ){return newArr.length}
    else{
       return  (newArr - sum)
    }
}

console.log(sumOfSquares(15));