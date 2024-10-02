const password = "123141rg1";
let isValid = true;
if (password.length < 8) {
  isValid = false;
  //   console.log(`Is the password ${password} valid? false`);
} else if (password[0] === password[password.length - 1]) {
  isValid = false;
} else if (password === "12345678") {
  isValid = false;
} else if (password[0] === " ") {
  isValid = false;
} else if (password[password.length - 1] === "!") {
  isValid = false;
}

console.log(`Is the password ${password} valid? ${isValid}`);
