const str = "nikhil";
//count number of vowels and return them.

function findVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let vowelsInStr = `vowels in ${str} are `;
  const splitStr = str.split("").sort();
  for (let j = 0; j < vowels.length; j++) {
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i] == vowels[j]) {
        count++;
        vowelsInStr = vowelsInStr + splitStr[i] + ", ";
      }
    }
  }
  console.log(`There are ${count} vowels in ${str}`);
  return vowelsInStr;
}

console.log(findVowel(str));


function vo(str){
  let arr2=[]
  let count=0
  let arr=str.split('')
  for(i in arr){
     
      if(['a','e','i','o','u'].includes(arr[i])){
          count++
          arr2.push(arr[i])
      }
  }
  console.log(count)
  return arr2
}
console.log(vo("elephant"))