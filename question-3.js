// Question #3
let userPassword = "12342";
let userPassword2 = "123422222";
let userPassword3 = "123422222222222";
// เริ่มเขียนโค้ดตรงนี้
function passwordCheck(userPassword) {
  let length = userPassword.length;

  if (length < 6) {
    return "weak";
  } else if (length >= 6 && length <= 10) {
    return "medium";
  } else if (length > 10) {
    return "strong";
  }
}

console.log(passwordCheck(userPassword));
console.log(passwordCheck(userPassword2));
console.log(passwordCheck(userPassword3));
