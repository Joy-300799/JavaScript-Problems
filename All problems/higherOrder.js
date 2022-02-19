// map()
let candidates = [
    {
        "fName": "sourav",
        "lName":"shukla",
        "age": 25,
        "gender": "male"
    },
    {
        "fName": "malika",
        "lName":"gulati",
        "age": 22,
        "gender": "female"
    },
    {
        "fName": "nikhil",
        "lName":"patil",
        "age": 27,
        "gender": "male"
    },
    {
        "fName": "sonal",
        "lName":"rawal",
        "age": 26,
        "gender": "female"
    },
    {
        "fName": "tushar",
        "lName":"saini",
        "age": 29,
        "gender": "male"
    }
]

let res = candidates.filter(x => x.fName.length === 5)
// console.log(res);


//average age- from filter, map & forEach
let avgAge = candidates.map(x => x.age)
let a = 0;
let resAge = avgAge.map(x => a += x)
// console.log(a/candidates.length);

// avg age of male vs female.
let filtMale = candidates.filter(x => x.gender == "male")
let filtFemale = candidates.filter(x => x.gender == "female")
// console.log(filtMale)
// console.log(filtFemale)

let sumAge = filtMale.map(x=> x.age)
// console.log(sumAge)
let b = 0;
let calcAge = sumAge.map(x=> b+=x)
// console.log(b/filtMale.length)

//forEach ex-
 candidates.forEach(x=> console.log(x.name))

 // forEach example - 
 const carBrand = ['honda', 'toyota', 'tata'];
 const carModel = ['city','innova','harrier']
 const obj = {}
 carBrand.forEach(
 (brand,index)=> {
 obj[brand] = carModel[index]
 })
 console.log(obj)

//printing full names of candidates
let fullName = candidates.forEach(x=>console.log(x.fName+" "+x.lName))

let nameArr = candidates.map(x=>x.fName+" "+x.lName)
// console.log(nameArr)

//reduce()
let fetchAge = candidates.map(x=> x.age)
// console.log(fetchAge)
let ageSum =  fetchAge.reduce((x,y)=> x+y)
console.log(ageSum/fetchAge.length)  //averaging


/*
Map()-
1. Returns an Array
2. Do changes in the original array
3. can perform operations

filter()-
1. returns a filtered array which satisfies the condition
2. It's mutable
3. Performs only conditional operations.

find()-
1. returns the first matched element acc. to condition.
2. If there's no condition then it returns the first element of the array.
3. Performs only conditional operations.

forEach()-
1. It traverse the every elements of array once.
2. It returns in string, Not in array.
3. It has same functionality as map, but gives every element individually

reduce()-
1. returns a single value acc. to the operation performed.
2. It doesn't chnages the original array.
3. Takes a callBackFn as a parameter.
*/