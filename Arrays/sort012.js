const arr = [2, 1, 2, 0, 0, 1, 2, 0];
//sort the array like this [0,0,0,1,1,2,2,2];

function sort(arr) {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 0:
        cnt0++;
        break;
      case 1:
        cnt1++;
        break;
      case 2:
        cnt2++;
        break;
    }
  }
  i = 0;
  while (cnt0 > 0) {
    arr[i++] = 0;
    cnt0--;
  }

  while (cnt1 > 0) {
    arr[i++] = 1;
    cnt1--;
  }

  while (cnt2 > 0) {
    arr[i++] = 2;
    cnt2--;
  }
  return arr;
}
console.log(sort(arr));
