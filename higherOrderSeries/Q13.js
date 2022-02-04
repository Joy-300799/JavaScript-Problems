// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or

// false otherwise.

// For example, given the following input array:

var list = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

function isLanguageDiverse(list) {
    const js = list.filter(e => e.language === 'JavaScript').length;
    const ruby = list.filter(e => e.language === 'Ruby').length;
    const python = list.filter(e => e.language === 'Python').length;
    return Math.max(js, ruby, python) <= Math.min(js, ruby, python) * 2 ? true : false;
}

console.log(isLanguageDiverse(list));