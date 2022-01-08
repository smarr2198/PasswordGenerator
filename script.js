// setting variable for our 'generate' button
var generateBtn = document.querySelector("#generate");
// create array of letters
let lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//set arrays for numbers and symbols
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
let possiblePassword = [];
// generatePassword
// return a final password as a string
function generatePassword() {
  // assign a variable to the length of the password
  // ask user for length
  let pwLength = prompt(
    "How long would you like your password? Choose 8-128 Chars."
  );
  // create empty array the final password will get pushed too
  let password = [];
  // setting parameters of how big the password should be
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return;
  }
  // ask user if they want lower case letters
  //if true, choose random characters from array and concat with possiblePassword array
  let possibleLc = window.confirm("Would you like lower case letters?");
  if (possibleLc == true) {
    let i = Math.floor(Math.random() * lcLetters.length);

    password.push(lcLetters[i]);
    pwLength--;
    possiblePassword = possiblePassword.concat(lcLetters);
  }
  // ask user if they want upper case letters
  //if true, choose random characters from array and concat with possiblePassword array
  let possibleUc = window.confirm("Would you like upper case letters?");
  if (possibleUc == true) {
    let i = Math.floor(Math.random() * ucLetters.length);

    password.push(ucLetters[i]);
    pwLength--;
    possiblePassword = possiblePassword.concat(ucLetters);
  }
  // ask user if they want numbers
  //if true, choose random characters from array and concat with possiblePassword array
  let possibleNumbers = window.confirm("Would you like numbers?");
  if (possibleNumbers == true) {
    let i = Math.floor(Math.random() * numbers.length);

    password.push(numbers[i]);
    pwLength--;
    possiblePassword = possiblePassword.concat(numbers);
  }
  // ask user if they want symbols
  //if true, choose random characters from array and concat with possiblePassword array
  let possibleSymbols = window.confirm("Would you like symbols?");
  if (possibleSymbols == true) {
    let i = Math.floor(Math.random() * symbols.length);

    password.push(symbols[i]);
    pwLength--;
    possiblePassword = possiblePassword.concat(symbols);
  }
  // loop through array of charcters for the password
  for (let i = 0; i < pwLength; i++) {
    let i = Math.floor(Math.random() * possiblePassword.length);
    //push possiblePassword into final password array
    password.push(possiblePassword[i]);
  }

  return password.join("");
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
