// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    return null;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
