let arr = [1, 1,3, 3, 2, 1,1]

function filterUnique(arr) {
    var counts = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    // console.log(counts)
    let objKeys = Object.keys(counts)
    let objVal = Object.values(counts)
    let oneInd = (objVal.indexOf(1))

    return Number(objKeys[oneInd]);
}

console.log(filterUnique(arr))

// function sameFreq(arr) {
//     // const arr = [1,1,2,3,4,4]
//     const counts = {};
//     arr.forEach((x) => {
//       counts[x] = (counts[x] || 0) + 1;
//     });
//     console.log(counts)
//     for (let key in counts) {
//       if (counts[key] > 1) {
//         return true;
//       }
     
//     } return false;
//   }
//   console.log(sameFreq([2,3]));



// const obj = {}
//  let res = [];
//  let count ;
//  arr.forEach((x)=>{
//      obj[x] = (obj[x] || 0) + 1;
//  });
// //  console.log(obj)
//  for(let key in obj){
//      if(obj[key] == 1){
//          return res.push(count) 
//      }
//      let values = Object.values(obj)
//      for(i in values){
//          if(values[i] == 1){
//              count = values[i];
//          }
//      }
//      console.log(count)
//         // console.log(values)
//  }
 