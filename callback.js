// Callback Function - In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function.

//callback function as a parameter.
function greet(name , callback) {
    console.log('Hi '+ name)
    callback();
}

//Callback Func.
function callMe() {
    console.log('I am a Callback Function')
}
greet('Joy', callMe)