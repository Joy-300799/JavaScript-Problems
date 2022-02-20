let arr =[1,2,1,3,2]

function degreeOfArray(arr) {
    // Write your code here
    let range = new Map();
    let maxDegree = 0;
    let minLength = Infinity;
   
    for(let i = 0; i < arr.length; i++){ if(range.has(arr[i])) {
       let start = range.get(arr[i])[0];
       let degree = range.get(arr[i])[2]; 
       degree++;
    
       range.set(arr[i], [start, i, degree]);
       if(degree > maxDegree)
          maxDegree = degree;
       }
       else {
          let degree = 1;
          range.set(arr[i],[i, i, degree]); 
          if(degree > maxDegree)
          maxDegree = degree;
       }
    }
    
    for (let key of range.keys()){
       let val = range.get(key)
       if(val[2] === maxDegree){
          let diff = (val[1] - val[0]) + 1;
          if(diff < minLength)
           minLength = diff;
       }
    }
    return minLength;

}

console.log(degreeOfArray(arr))

