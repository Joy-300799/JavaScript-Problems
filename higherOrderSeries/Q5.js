// Your task is to return an object which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

var list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

// your function should return the following object
// { C: 2, JavaScript: 1, Ruby: 1 }

function countLanguages(list) {
    let obj = {}
    list.forEach(x => {
        let key = [x.language]
        obj.hasOwnProperty(key) ? obj[key]++ : obj[key] = 1
    })
    return obj;
}