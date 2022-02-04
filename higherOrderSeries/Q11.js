var list = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

//   write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

function getAverageAge(list) {
    let totalAgeSum = list.map(ele => ele.age).reduce((a, b) => a + b)
    return Math.round(((totalAgeSum) / list.length))
}

console.log(getAverageAge(list))