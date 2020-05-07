var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var numbers= ["0","1","2","3","4","5","6","7","8","9"]

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","?",".",",","/"]

function killBill() {

  console.log("kill bill")

 


}

killBill()



function gatherInfo() {

var passwordLength= Number(prompt("How many long do you want your password to be? Must be longer than 8 characters and shorter than 128 characters."))

console.log("so far so good")


if(isNaN(passwordLength) === true){

  alert("You have not entered a number.")

  console.log("Not Number")

  return
};

if(passwordLength < 8) {

  alert("Password length must be greater than 8 characters.")

  console.log("Password not long enough.")

  return
  
};

if(passwordLength > 128) {

    alert("Password is too many characters. Make it less than 128 please!!")

    console.log("PW Too long.")

    return;
};


var includeNumbers = confirm("Do you want you password to include Numbers?")
var includeSpecial = confirm("Do you want your password to include Special Characters?")
var includeLC = confirm("Do you want your password to include LowerCase letters?")
var includeUpperCase = confirm("Do you want your password to include UpperCase letters?")

if (
  includeNumbers===false&&
  includeSpecial===false&&
  includeLC===false&&
  includeUpperCase===false)
 {
  alert("Your password must include some form of characters")

  console.log("No characters chosen.")

  return
};

var termsofPW= {

  includeUpperCase:includeUpperCase,
  passwordLength:passwordLength,
  includeSpecial:includeSpecial,
  includeLC: includeLC,
  includeNumbers: includeNumbers

}

console.log(termsofPW)

return termsofPW




}


function randomize(arr) {
  var random = arr[[Math.floor(Math.random() * arr.length)]]

  return random

};






function generatePassword() {

  var criteria= gatherInfo()

  var newPassword = []

  var availableChar= []

  var chosenChar = []

  if(criteria.includeLC) [

    availableChar=availableChar.concat(lowercaseLetters),
    chosenChar.push(randomize(lowercaseLetters))

  ]

  if(criteria.includeNumbers){
    availableChar= availableChar.concat(numbers),
    chosenChar.push(randomize(numbers))

  }

  if (criteria.includeSpecial) [

    availableChar= availableChar.concat(symbols),
    chosenChar.push(randomize(symbols))
  ]

  if(criteria.includeUpperCase) [

    availableChar= availableChar.concat(letters),
    chosenChar.push(randomize(letters))
  ]
for (var i= 0; i< criteria.passwordLength; i++){

  var availableChar2 = randomize(availableChar)

newPassword.push(availableChar2)

}

for (var i= 0; i< chosenChar.length; i++) {

  newPassword[i]= chosenChar [i]

  return newPassword.join("")

}

  

};



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


