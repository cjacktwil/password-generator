// Assignment Code
/*var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

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

function passwordType () {
  password.Type = window.confirm("Would you like your password to include lowercase letters?");
  if (password.Type) {
    password.Type = "lowercase";
  }
  password.Type = window.confirm("Would you like your password to include uppercase letters?");
  if (password.Type) {
    password.Type = "uppercase";
  }
  password.Type = window.confirm("Would you like your password to include numbers?");
  if (password.Type) {
    password.Type = "numbers";
  }
  password.Type = window.confirm("Would you like your password to include special characters?");
  if (password.Type) {
    password.Type = "special characters";
  }
  console.log(password.Type);
  //currently only logging last type - need to figure out how to add each type as part of the array
};

var password = {
  Type: [],
  HowMany: function() {
    var passwordTypeLength = passwordLength / password.Length;
    return passwordTypeLength;
  }, 
  Set: function() {
    for(i=0; i < password.HowMany; i++) {
      var pw = window.prompt("Please enter a " + password.Type + " character.");
      return pw;
    };
  }
  };

passwordLength();
passwordType();

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
