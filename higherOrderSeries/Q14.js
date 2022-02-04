// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

var list = [
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
];
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

function orderFood(list) {
    let allMeal = list.map(ele => ele.meal)

    let obj = {};
    allMeal.forEach(ele => obj.hasOwnProperty(ele) ? obj[ele]++ : obj[ele] = 1)

    return obj;
}

console.log(orderFood(list))