// Your task is to return the number of JavaScript developers coming from Europe.

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

function countDeveloper(list1) {
    return list1.filter(x => x.continent == "Europe" && x.language == "JavaScript").length;
}

console.log(countDeveloper(list1))