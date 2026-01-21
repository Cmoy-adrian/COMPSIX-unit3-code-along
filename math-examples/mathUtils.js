function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) { 
    if (b === 0) { 
        return "Cannot divide by zero"; 
    } 
    return a / b; 
}

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

module.exports = {
    add,
    subtract,
    multiply,
	divide,
    calculateAverage
};

const nums = [2, 4, 6, 8, 10];

function findHighest(arr) {
	let highest = arr[0];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > highest) {
        	highest = arr[i];
        }
    }
    return highest
}

function sumArr(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
    }
	return sum;
}