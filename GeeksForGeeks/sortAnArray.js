//Link - https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

function sort(arr) {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
  return arr;
}

console.log(sort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
