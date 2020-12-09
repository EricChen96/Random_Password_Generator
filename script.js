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
  
  var allowLowercase = confirm("Do you want lowercase?");
  var allowUppercase = confirm("Do you want uppercase?");
  var allowNumeric = confirm("Do you want numeric characters?");
  var allowSpecial = confirm("Do you want special characters?");
  if (!allowLowercase && !allowUppercase && !allowNumeric && !allowSpecial) {
    return null;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
