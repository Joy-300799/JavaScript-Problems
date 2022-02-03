// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

var list =
    [
        { "firstName": "Mark", "lastName": "G.", "country": "Scotland", "continent": "Europe", "age": 22, "language": "JavaScript" },
        { "firstName": "Victoria", "lastName": "T.", "country": "Puerto Rico", "continent": "Americas", "age": 30, "language": "Clojure" },
        { "firstName": "Emma", "lastName": "B.", "country": "Norway", "continent": "Europe", "age": 19, "language": "Clojure" }]

    // [{ "firstName": "Luka", "lastName": "J.", "country": "Slovenia", "continent": "Europe", "age": 29, "language": "C" },
    // { "firstName": "Joao", "lastName": "D.", "country": "Portugal", "continent": "Europe", "age": 35, "language": "C" },
    //  { "firstName": "Oliver", "lastName": "Q.", "country": "Australia", "continent": "Oceania", "age": 19 }]

// your function should return true.

function isSameLanguage(list) {
    const lang = list[0].language;
    return list.every(v => v.language === lang);
}
console.log(isSameLanguage(list))