// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


// sets the length of the password
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

// function for if the user wants to include uppercase
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// function for if the user wants to include numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// function for if the user wants to include special characters
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

function generatePassword() {
  determineLength();
  determineUppercase();
  determineNumbers();
  determineSpecial();

  var characters = lowercaseCharacters;
  var password = "";

  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseCharacters + numberCharacters + specialCharacters;
  } else if (uppercaseCheck && numberCheck){
    characters += uppercaseCharacters + numberCharacters;
  } else if (numberCheck && specialCheck){
    characters += numberCharacters + specialCharacters;
  } else if (uppercaseCheck && specialCheck){
    characters += uppercaseCharacters + specialCharacters;
  } else if (uppercaseCheck){
    characters += uppercaseCharacters;
  } else if (numberCheck){
    characters += numberCharacters;
  } else if (specialCheck){
    characters += specialCharacters;
  } else {
    characters === lowercaseCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
