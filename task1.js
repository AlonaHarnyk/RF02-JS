// // Task 1. You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

const checkNumber = prompt("Input check number, please");
const tipPercentage = prompt("Input tip percentage, please");

if (checkNumber === null || tipPercentage === null) {
	alert("Canceled");
} else {
	const formattedCheckNumber = Number.parseFloat(checkNumber);
	const formattedTipPercentage = Number.parseFloat(tipPercentage);
	const tipAmount = Number(((formattedCheckNumber * formattedTipPercentage) / 100).toFixed(2));
	const totalSum = formattedCheckNumber + tipAmount;
	if (
		Number.isNaN(formattedCheckNumber) ||
		Number.isNaN(tipPercentage) ||
		totalSum < 0 ||
		formattedTipPercentage < 0 ||
		formattedTipPercentage > 100
    ) {
        alert('Invalid input data')
    } else {
        alert(`Check number: ${formattedCheckNumber}\nTip: ${formattedTipPercentage}%
Tip amount: ${tipAmount}\nTotal sum to pay: ${totalSum}`)
    }
}
