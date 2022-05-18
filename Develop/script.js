// Define variables
var passwordlength = 8;
var choice = [];
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "?", "/", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctprompts = prompts();//T or F
  if (correctprompts) {
    var newpassword = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = newpassword;
  }


  

}

//Password Generator Function to generate passwords based on prompts
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordlength; i++){
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex]
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function prompts() {
  choice = [];
  passwordlength = parseInt(window.prompt("How many characters do you want your password to be? Choose between 8 to 128")); //NaN

  //If function to deduce if password length is between 8 to 128
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Password length is not in range is not in range");
    return False
  }

  //iF user clicks ok, the users choice is merged with what the type of variables the user wannts
  if (confirm("Do you want to include lowercase letters?")) {
    choice = choice.concat(lowercase);
  }

  if (confirm("Do you want to include uppercase letters?")) {
    choice = choice.concat(uppercase);
  }

  if (confirm("Do you want to include special letters?")) {
    choice = choice.concat(specialchar);
  }

  if (confirm("Do you want to include numbers letter?")) {
    choice = choice.concat(number);
  }
  return true



}


