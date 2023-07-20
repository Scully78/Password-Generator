// Create an Object called 'keys' to contan all the strings.  as its an object there must be colons after the name and then comma at the end of each line

const keys = {
  number: "0123456789",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};

// // all the functions in an array to create a random number between 0 and the length or the array to get a random function.  put all these functions in an array because we will further create a random number between 0 and the length of the array to get a random function.
const getKeys = [
  (number = function () {
    return keys.number[Math.floor(Math.random() * keys.number.length)]; // math.floor rounds down so there is no decimal point created from the Math.random.
  }),
  (lowerCase = function () {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  }),
  (upperCase = function () {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  }),
  (symbol = function () {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }),
];

// // Create a function to generate the random number.  First, check if at least one checkbox is checked for the function to proceed. If none of the checkboxes is checked then return the function.
// //To check if at least one checkbox is checked grab all checkboxes using document.getElementById access method, and check if it is checked using the checked property. It returns a boolean value.

// //Add all these boolean values and if it is 0 then all checkbox is unchecked.

const createPassword = function () {
  const number = document.getElementById("number").checked;
  const lowerCase = document.getElementById("lowerCase").checked;
  const upperCase = document.getElementById("upperCase").checked;
  const symbol = document.getElementById("symbol").checked;
  if (number + lowerCase + upperCase + symbol === 0) {
    alert(`Please check at least one box!`); // Boolean created to say if none of the boxes are checked the alert will say check at least one box so if its not a 0. then that ok.
    return;
  }

  //   // Now create an empty string named 'password' and run a while loop until the length of the 'password' string becomes equal to the length of the input password.
  //   // In each iteration of this loop create a random number between 0 and the length of the function array (0-4). Now check if the checkbox with the same name as the function is checked if it is checked then run the function and add the returned character to our password.
  //   // This loop will run until the password length becomes equal to the desired length of the password. And finally set the password as innerHTML of the password box.

  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKeys[Math.floor(Math.random() * getKeys.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
};
// //The above function basically first selects a random function from the array 'getKey' and then runs it which then returns a random character from the string of that function. So there are 2 random selections making passwords more random.

// // Copy the code functionality.  it will copy the code to the clipboard of the device.
function copyPassword() {
  const textarea = document.createElement("textarea");
  const password = document.getElementById("passwordBox").innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}
