

var resultEl = document.querySelector("#password");
var generateEl = document.querySelector("#generate");

generateEl.addEventListener("click", () => {
var length = prompt("How many characters would you like to include in your password?");
if (length < 8 || length > 128 || length === null) {
  alert("Please input 8~128 characters")
  prompt("How many characters would you like to include in your password?")
}
console.log(length)
// Define Condition
console.log(length)
var hasLower = confirm("Click ok to include lower case");
var hasUpper = confirm("Click ok to include upper case");
var hasNumber = confirm("Click OK to include numbers");
var hasSpecial = confirm("Click OK to include special characters");
// console.log(hasLower)
// console.log(hasUpper)
// console.log(hasNumber)
// console.log(hasSpecial)
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length)
}
)
// Loop every condition
function generatePassword(lower, upper, special, numeric, length){
 
 var passwordResult = "";
 var typesCount = lower + upper + numeric + special;
 var typesloop = [{ lower }, { upper }, { numeric }, { special }].filter
 (item => Object.values(item) [0]);

 if (typesCount === 0){
  return "Please have at least one checkbox checked!";
}

 for(var i = 0; i <= length; i+=typesCount) {
   typesloop.forEach(type => {
     var funcName = Object.keys(type) [0];

     passwordResult += randompick[funcName] ();
   });
 }


 var pushedResult = passwordResult.slice(0, length);
 return pushedResult;

}
// Get Random Characters and Generate
var randompick = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numeric: getRandomNumeric,
  special: getRandomSpecial,
  
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


// Generate functions
// Get character from char code https://www.w3schools.com/charsets/ref_html_ascii.asp


function getRandomLower() {

return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  
}

// console.log (getRandomLower())

function getRandomUpper() {

return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    
}

// console.log (getRandomUpper())



function getRandomNumeric() {
  
  return String.fromCharCode(Math.floor(Math.random() * 16) + 32);
}


// console.log (getRandomNumeric())
var specialCharacters = []
function getRandomSpecial() {
	return (Math.floor(Math.random() * 10));
}

// console.log (getRandomSpecial())
