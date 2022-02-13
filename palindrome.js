var isPalindrome = function(x) {
    const a = Number(x.toString().split("").reverse().join(""))
    if(x !== a){
    return false;
    }
    return true;
};

console.log(isPalindrome(-323));