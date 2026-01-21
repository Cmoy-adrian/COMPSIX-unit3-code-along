const fs = require('fs');

// Read the entire file as text
const content = fs.readFileSync('./file-examples/student-responses.txt', 'utf8');

// Split into an array whenever there is a line break in the file 
const lines1 = content.split('\n');

// Analyze the data
console.log('Number of responses:', lines1.length);
console.log('First response:', lines1[0]);
console.log('Last response:', lines1[lines1.length - 1]);

const scoresText = fs.readFileSync('./file-examples/quiz-scores.txt', 'utf8');

// Convert text to array of numbers
const lines2 = scoresText.split('\n');
const scores = [];

for (let i = 0; i < lines2.length; i++) {
    const line = lines2[i].trim(); // Remove extra whitespace
    if (line.length > 0) {
      scores.push(parseFloat(line)); // Convert to number
    }
}

console.log('Scores:', scores); // Scores: [ 85, 92, 78, 96, 88, 73, 91, 87, 94, 82, 89, 76, 93, 84, 90 ]
console.log('Number of scores:', scores.length); // Number of scores: 15