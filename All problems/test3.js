const word1 = "eleven plus two";
const word2 = "twelve plus one";

function anagram(word1, word2) {
  const splitWord1 = word1.split(" ").join("");
  const splitWord2 = word2.split(" ").join("");
  console.log(splitWord1);

  const operationOnW1 = splitWord1.split("").sort().join("")
  const operationOnW2 = splitWord2.split("").sort().join("")
  console.log(operationOnW1)

  if(operationOnW1 !== operationOnW2){
      return false;
  }
  return true;
}

console.log(anagram(word1, word2));
