// Assignment Code

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChar = "0123456789";
var symbolChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var generateBtn = document.querySelector("#generate");


// Build character set based on user input
function generatePassword() {

  let length = prompt(
    "How long do you want your password to be? (8-128 characters)"
  );
  let includeLowercase = confirm(
    "Do you want to include lowercase characters?"
  );
  let includeUppercase = confirm(
    "Do you want to include uppercase characters?"
  );
  let includeNumbers = confirm("Do you want to include numeric characters?");
  let includeSymbols = confirm("Do you want to include special characters?");

  // Validate user input
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please select at least one character type.");
    return;
  }

  let charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChar;
  }
  if (includeUppercase) {
    charSet += uppercaseChar;
  }
  if (includeNumbers) {
    charSet += numbersChar;
  }
  if (includeSymbols) {
    charSet += symbolChar;
  }

  // Generate random password
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

if (generateBtn !== null) {
  generateBtn.addEventListener("click", writePassword)
}
  