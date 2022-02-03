// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.

// false otherwise.

// For example, given the following input array:

var list =
    [
        {
            firstName: 'Fatima',
            lastName: 'A.',
            country: 'Algeria',
            continent: 'Africa',
            age: 25,
            language: 'JavaScript'
        }
    ]
// [
//     { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//     { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//     { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// your function should return true as there is at least one developer from the required 5 geographic zones.

function allContinents(list) {

    // let defaultContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    // let continents = list.map(ele => ele.continent)
    // // console.log(continents) ;
    // for (i in defaultContinents) {
    //     let filterConti = continents.includes(defaultContinents[i])
    //     return filterConti;
    // }

    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
    // let obj = {};
    // continents.forEach(x => obj.hasOwnProperty(x) ? obj[x]++ : obj[x] = 1)

    // let values = Object.values(obj)
    // let sum = values.reduce((a, b) => a + b)

    // if (values.length != sum) {
    //     return false;
    // } else { return true; }
}

console.log(allContinents(list))