// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseSheet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSheet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSheet = "0123456789"
var specialSheet = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

function generatePassword() {
  var passwordLength = parseInt(prompt("How long do you want your password to be?"));
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
  var characterSheet = "";
  characterSheet += allowLowercase ? lowercaseSheet : "";
  characterSheet += allowUppercase ? uppercaseSheet : "";
  characterSheet += allowNumeric ? numericSheet : "";
  characterSheet += allowSpecial ? specialSheet : "";

  console.log(characterSheet);


  var tempPassword;
  do {
    tempPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      tempPassword += characterSheet[Math.floor(Math.random() * characterSheet.length)];
    }
  } while (!checkIfCharUsed(allowLowercase, tempPassword, lowercaseSheet) || !checkIfCharUsed(allowUppercase, tempPassword, uppercaseSheet) || !checkIfCharUsed(allowNumeric, tempPassword, numericSheet) || !checkIfCharUsed(allowSpecial, tempPassword, specialSheet))


  return tempPassword;
}

function checkIfCharUsed(checkCharacterUsed, checkPassword, checkCharacterSheet) {
  if (checkCharacterUsed) {
    for (var i = 0; i < checkPassword.length; i++) {
      for (var j = 0; j < checkCharacterSheet.length; j++) {
        if (checkPassword[i] === checkCharacterSheet[j]) {
          console.log(checkCharacterSheet);
          return true
        }
      }
    }
  }
  else {
    return true;
  }
  return false;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
