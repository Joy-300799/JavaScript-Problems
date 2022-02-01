/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n){
    if(n == 0){
        return [0];
    }
let splitN = n.toString().split('').map(Number).reverse()
return(splitN)
}

console.log(digitize(348597));