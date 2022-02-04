// Given the following input array:

var list = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

// write a function that

// adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
// Hi, could you please provide your <property name>.

// and returns only the developers with missing details:

//Output -
[
    {
        firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
        question: 'Hi, could you please provide your firstName.'
    },
    {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
        question: 'Hi, could you please provide your language.'
    }
]

function askForMissingDetails(list) {
    let findNull = list.map(x => Object.values(x).filter(s => s === null))
    return findNull;
}

console.log(askForMissingDetails(list))
