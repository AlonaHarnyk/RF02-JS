// Task 2. Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

const word = prompt("Please, enter word!");
// if (word === null || word.trim() === "") {
// 	alert("Invalid value");
// } else {
// 	if (word.length % 2 === 0) {
// 		alert(`${word[word.length / 2 - 1] + word[word.length / 2]}`);
// 	} else {
// 		alert(`${word[Math.floor(word.length / 2)]}`);
// 	}
// }

if (word && word.trim()) {
	if (word.length % 2 === 0) {
		alert(`${word[word.length / 2 - 1] + word[word.length / 2]}`);
	} else {
		alert(`${word[Math.floor(word.length / 2)]}`);
	}
} else {
    alert("Invalid value");
}