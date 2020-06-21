// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//Identify ASCII code array for each character type
var includeLower = arrayFromLowToHigh(97, 122);
var includeUpper = arrayFromLowToHigh(65, 90);
var includeNumber = arrayFromLowToHigh(48, 57);
var includeSymbol = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
//declare variables for global use
var charCodes = [];

//create a function to create arrays out of the ASCII codes for the different character types.
function arrayFromLowToHigh(low, high) {
      var array = []
       for (let i = low; i <= high; i++) {
         array.push(i)
       }
       return array;
      };

function generatePassword () {
  //function to allow user to self-select the character types he/she wants to include in password
var length = window.prompt("How many characters would you like to include in your password? Please enter a number between 8 and 128.");
if (length >= 8 && length <= 128) {
  console.log(length);
}
//if entry does not meet the criteria, prompt user to try again
else {
window.alert("Your entry is not valid. Please try again.");
};

var lowCharCodes = confirm("Would you like your password to include lowercae letters?");
if (lowCharCodes) {
  charCodes = charCodes.concat (includeLower);  
  console.log(charCodes);
};

var upCharCodes = confirm("Would you like your password to include uppercase letters?");
if (upCharCodes) {
  charCodes = charCodes.concat (includeUpper);
  console.log(charCodes);
};

var numCharCodes = confirm("Would you like your password to include numbers?");
if (numCharCodes) {
  charCodes = charCodes.concat (includeNumber);
  console.log(charCodes);
};

var symCharCodes = confirm("Would you like your password to include symbols?");
if (symCharCodes) {
  charCodes = charCodes.concat (includeSymbol);
  console.log(charCodes)};

  //use length and selected character types to generate a random password
  var passwordCharacter = []
  for (let i = 0; i < length; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * length)]
     passwordCharacter.push(String.fromCharCode(characterCode));
      //console.log(characterCode);
  }
  return passwordCharacter.join('')
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);