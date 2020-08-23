// Get element ID

var resultEl = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numericEl = document.querySelector("#numeric");
var specialEl = document.querySelector("#special");
var generateEl = document.querySelector("#generate");

// Define Condition
generateEl.addEventListener("click", () => {
var length = +lengthEl.value;
var hasLower = lowercaseEl.checked;
var hasUpper = uppercaseEl.checked;
var hasNumber = numericEl.checked;
var hasSpecial = specialEl.checked;

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
