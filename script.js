// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*collect password length
collect password requirements - upper, lower, number, symbol
create array of upper, lower, number, symbol using ASCII codes
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
 - double check ASCII codes for each type; concatenate all types together; 
 function arrayFromLowToHigh(low, high) {
   const array = []
   for (let i = low; i <= high; i++) {
     array.push(i)
   }
   return
  }
  
  check to see if selected
  const includeLower = includeLowercaseEleemnt.checked (for video - how am I labeling confirms?)
  
  function generatePassword(characterAmount, includeUpper, includeLower, inlcudeNumb, includeSym) {
    if (includeLower) charCodes = charCodes.concat (LOWERCASE_CHAR_CODES)
    if (includeUpper) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
    etc.
    
    const passwordCharacter = []
    for (let i = 0; i < characterAmount; i++) {
      const charactersCode = charCodes[Math.floor(Math.random()) * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }
  */

 function passwordLength () {
  var length = window.prompt("How many characters would you like to include in your password? Please enter a number between 8 and 128.");
  if (length >= 8 && length <= 128) {
    console.log(length);
}
else {
  window.alert("Your entry is not valid. Please try again.");
}
};

 var arrayFromLowToHigh = function(low, high) {
  var array = []
   for (let i = low; i <= high; i++) {
     array.push(i)
   }
   return array;
  };

 var pwFunction = function() {
  if (passwordTypeOptions[0]) { 
  var lowCharCodes = arrayFromLowToHigh(97, 122)}
  else if (passwordTypeOptions[1]) {
  var upCharCodes = arrayFromLowToHigh(65, 90)}
  else if (passwordTypeOptions[2]) {
  var numCharCodes = arrayFromLowToHigh(48, 57)}
  else if (passwordTypeOptions[3]) {
  var symCharCodes = arrayFromLowToHigh(33, 47) + "," + arrayFromLowToHigh(58, 64) + "," + arrayFromLowToHigh(91, 96) + "," +  arrayFromLowToHigh(123, 126)}
console.log(lowCharCodes + upCharCodes + numCharCodes + symCharCodes);  
};


var passwordTypeOptions = ["lowercase letters", "uppercase letters", "numbers", "symbols"];
function passwordType () {
  for (i = 0; i < passwordTypeOptions.length; i++) {
  var options = window.confirm("Would you like your password to include " + passwordTypeOptions[i] + "?");
  if (options) {
        console.log(passwordTypeOptions[i]);
        pwFunction(options);
        //console.log(charCodes);
  }
  }
};



 /* var pwFunction = function() {
  if (passwordTypeOptions[0]) { 
  var charCodes = arrayFromLowToHigh(97, 122)};
  if (passwordTypeOptions[1]) {
  var charCodes = arrayFromLowToHigh(65, 90)};
  if (passwordTypeOptions[2]) {
  var charCodes = arrayFromLowToHigh(48, 57)};
  if (passwordTypeOptions[3]) {
  var charCodes = arrayFromLowToHigh(33, 47) + "," + arrayFromLowToHigh(58, 64) + "," + arrayFromLowToHigh(91, 96) + "," +  arrayFromLowToHigh(123, 126)};
console.log(charCodes); 
};*/
passwordType();
pwFunction();

 /* var passwordCharacter = []
  for (let i = 0; i < length; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * length)]
    passwordCharacters.push(String.fromCharCode(characterCode));
    console.log(passwordCharacter);
  };*/


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
