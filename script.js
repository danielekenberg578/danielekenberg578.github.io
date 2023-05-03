
function generateAndDisplay() {
    var length = document.getElementById("passwordLengthInput").value;
    var includeSmallCharacters = document.getElementById("smallCharactersCheckbox").checked;
    var includeBigCharacters = document.getElementById("bigCharactersCheckbox").checked;
    var includeNumberCharacters = document.getElementById("numberCharactersCheckbox").checked;
    var includeSpecialCharacters = document.getElementById("specialCharactersCheckbox").checked;


    if (includeSmallCharacters == false && includeBigCharacters == false && includeNumberCharacters == false && includeSpecialCharacters == false){
      return;
    }

    var password = generatePassword(length, includeSmallCharacters, includeBigCharacters, includeNumberCharacters, includeSpecialCharacters);
    document.getElementById("passwordDisplay").textContent = password;
  }

function generatePassword(length, includeSmallCharacters, includeBigCharacters, includeNumberCharacters, includeSpecialCharacters) {
  var base = "";
  var password = "";
  var i = 0;
  if (includeSmallCharacters) {
    base += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeBigCharacters) {
    base += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumberCharacters) {
    base += "0123456789";
  }
  if (includeSpecialCharacters) {
    base += "!@#$%&*";
  }
  
  for (; i < length; i = i + 1) {
    var randomIndex = Math.floor(Math.random() * base.length);
    password += base[randomIndex];
  }

  if (!includeSmallCharacters && !includeBigCharacters && !includeNumberCharacters && !includeSpecialCharacters){
    password = "Du måste klicka i någon av rutorna för att kunna skapa ett lösenord"
    return password
  }
  else{
    if (length<71){
      return password;
    } 
    else {
      password = "Ange ett lösenord med längd mellan 1 och 70 tecken.";
      return password;
    }
  }
  }

function copy(){
  const passwordDisplay = document.getElementById("passwordDisplay");
  const password = passwordDisplay.textContent;
  navigator.clipboard.writeText(password);
}







