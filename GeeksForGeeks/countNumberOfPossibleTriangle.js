// Link - https://www.geeksforgeeks.org/find-number-of-triangles-possible/

/*
Given an unsorted array of positive integers, find the number of 
triangles that can be formed with three different array elements 
as three sides of triangles. For a triangle to be possible from 3
 values, the sum of any of the two values (or sides) must be 
 greater than the third value (or third side). 
 */

function triangle(arr) {
    let count = 0
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] > arr[k]  && arr[i] + arr[k] > arr[j]   && arr[k] + arr[j] > arr[i]) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(triangle([4, 6, 3, 7]))