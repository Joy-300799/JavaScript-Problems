// Your task is to return one of the following strings:

{/* < firstName here >, < country here > of the first Python developer who has signed up; or */ }

// There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:

var list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

{/*Your function should return Victoria, Puerto Rico. */ }
// output - Victoria, Puerto Rico


function getFirstPython(list) {
    let py = list.filter(x => x.language == "Python")
    console.log(py);
    if (py.length == 0) { return `There will be no Python developers` }
    return py[0].firstName + ", " + py[0].country

}

console.log(getFirstPython(list))