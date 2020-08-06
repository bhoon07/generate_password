var generateBtn = document.querySelector("#generate");
var character=["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"]
let password="";

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
    for (var i=0; i<=character; i++) {
      password = password + character.charAt(Math.floor(Math.random()*Math.floor(character.length-1)));
  }
    
    passwordText.value = password;
  
  }

  writePassword();

  generateBtn.addEventListener("click", writePassword);