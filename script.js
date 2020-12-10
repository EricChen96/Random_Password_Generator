// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterSheet = "";

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
  characterSheet += allowLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
  characterSheet += allowUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  characterSheet += allowNumeric ? "0123456789" : "";
  characterSheet += allowSpecial ? " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"" : "";

  console.log(characterSheet);
  var tempPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    tempPassword += characterSheet[Math.floor(Math.random() * characterSheet.length)];
  }
  return tempPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
