function sameFreq(arr) {
    // const arr = [1,1,2,3,4,4]
    const counts = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts)
    for (let key in counts) {
      if (counts[key] > 1) {
        return true;
      }
     
    } return false;
  }
  console.log(sameFreq([2,3]));