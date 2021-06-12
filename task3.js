// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// o	For “User” show “Good day, dear User!”
// o	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// o	For “User” show “Good evening, dear User!”
// o	For “Admin” show “Good evening, dear Admin!”

const login = prompt("Enter your login, please");
const currentTime = new Date().getHours();
if (login === null || login.length === 0 || login.trim().length === 0) {
	alert("Canceled");
} else {
	if (login.length < 4) {
		alert(`I don't know any users having name length less than 4 symbols`);
	} else if (login === "User") {
		// ???
	} else if (login === "Admin") {
		// ???
	} else {
		alert("I don’t know you");
	}
}
