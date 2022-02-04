// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

var list = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

//Output -
[
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]

//   Explanation of the above:

// =>  Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number

// => Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

function findOddNames(list) {
    let fName = list.filter(x => x.firstName.split('').map(s => s.charCodeAt()).reduce((a, b) => a + b) % 2 != 0)

    return fName;
}

console.log(findOddNames(list));

