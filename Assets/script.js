// Assignment Code
var generateBtn = document.querySelector("#generate");
//String sheets containing each character according to type: lowercase, uppercase, numeric, and special characters
var lowercaseSheet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSheet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSheet = "0123456789"
var specialSheet = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""

// Write password to the #password input
function writePassword() {
  //calls the generatePassword function which should return a string and store in password var
  var password = generatePassword();

  //Finds password text in html and changes it to the password generated
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //Automatic copy to clipboard
  var copyText = document.querySelector("#password");
  copyText.focus();
  copyText.select();
  document.execCommand('copy');
}

//generates password function
function generatePassword() {
  //asks user for how long they want their password to be but has to be >8 and <128
  var passwordLength = parseInt(prompt("How long do you want your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    return "";
  }

  //Asks user for conditions they want in their password but one must be selected
  var allowLowercase = confirm("Do you want lowercase?");
  var allowUppercase = confirm("Do you want uppercase?");
  var allowNumeric = confirm("Do you want numeric characters?");
  var allowSpecial = confirm("Do you want special characters?");
  if (!allowLowercase && !allowUppercase && !allowNumeric && !allowSpecial) {
    return "";
  }

  //Adds the character sheet string according to what user selected previously
  var characterSheet = "";
  characterSheet += allowLowercase ? lowercaseSheet : "";
  characterSheet += allowUppercase ? uppercaseSheet : "";
  characterSheet += allowNumeric ? numericSheet : "";
  characterSheet += allowSpecial ? specialSheet : "";

  //stores password in temp password and checks if the temp password contains at least one character from each 
  //sheet selected. If not, it makes a new password until condition is met
  var tempPassword;
  do {
    tempPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      tempPassword += characterSheet[Math.floor(Math.random() * characterSheet.length)];
    }
  } while (!checkIfCharUsed(allowLowercase, tempPassword, lowercaseSheet) || !checkIfCharUsed(allowUppercase, tempPassword, uppercaseSheet) || !checkIfCharUsed(allowNumeric, tempPassword, numericSheet) || !checkIfCharUsed(allowSpecial, tempPassword, specialSheet))

  return tempPassword;
}

//function that checks if at least one character was used if user selected to use that character condition: lower, upper, numeric and special
function checkIfCharUsed(checkCharacterUsed, checkPassword, checkCharacterSheet) {
  if (checkCharacterUsed) {
    for (var i = 0; i < checkPassword.length; i++) {
      for (var j = 0; j < checkCharacterSheet.length; j++) {
        if (checkPassword[i] === checkCharacterSheet[j]) {
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
