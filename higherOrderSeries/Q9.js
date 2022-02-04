// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).

// false otherwise.
// For example, given the following input array:

var list = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
// your function should return true as there is at least one developer from each age group.

function isAgeDiverse(list) {
    let arr = list.map(x => x.age)
    let check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] <= 19 && arr[i] >= 10)) {
            check[0] = 1
        }
        if ((arr[i] <= 29 && arr[i] >= 20)) {
            check[1] = 1
        }
        if ((arr[i] <= 39 && arr[i] >= 30)) {
            check[2] = 1
        }
        if ((arr[i] <= 49 && arr[i] >= 40)) {
            check[3] = 1
        }
        if ((arr[i] <= 59 && arr[i] >= 50)) {
            check[4] = 1
        }
        if ((arr[i] <= 69 && arr[i] >= 60)) {
            check[5] = 1
        }
        if ((arr[i] <= 79 && arr[i] >= 70)) {
            check[6] = 1
        }
        if ((arr[i] <= 89 && arr[i] >= 80)) {
            check[7] = 1
        }
        if ((arr[i] <= 99 && arr[i] >= 90)) {
            check[8] = 1
        }
        if (arr[i] >= 100) {
            check[9] = 1
        }
    }
    return check.every(x => x === 1)
}

console.log(isAgeDiverse(list))