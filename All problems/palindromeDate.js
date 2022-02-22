// let date = new Date();
// console.log(date.getDate() + "-" +(date.getMonth()+01) + "-" + date.getFullYear());

//20220222 -> 22202202

// const date = new Date();

// function isDatePalindrome() {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let dt = date.getDate();

//   if (dt < 10) {
//     dt = "0" + dt;
//   }
//   if (month < 10) {
//     month = "0" + month;
//   }
//   let todayDate = dt + month + year;
//   const rev = todayDate.split("").reverse().join("");

//   if (todayDate == rev) {
//     return `Today's date is palindrome.`;
//   }
//   return `Today's date is not palindrome.`;
// }
// console.log(isDatePalindrome(date));

function date(str) {
  let xx = str.split("").reverse().join("");
  if (xx == str) {
    return true;
  }
  return false;
}
console.log(date("22022022"));

// 2222022  - >  2202222
