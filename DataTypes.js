// Q1
let firstName = "Fatiat";
let lastName = "Oseni";
let country = "Nigeria";
let city = "Abuja";
let age = 22;
let isMarried = false;
let year = 2024;
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Q2
console.log(typeof '10' === typeof 10);

// Q3
console.log(parseInt('9.8') === 10);

// Q4(i)
console.log(Boolean(1));
console.log(Boolean("qwerty"));

// Q4(ii)
console.log(Boolean(0)); 
console.log(Boolean("")); 


// Q5
console.log(4 > 3 && 10 < 12); 
console.log(4 > 3 && 10 > 12); 
console.log(4 > 3 || 10 < 12); 
console.log(4 > 3 || 10 > 12); 
console.log(!(4 > 3)); 
console.log(!(4 < 3)); 
console.log(!false); 
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4')); 

// Q6
let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// Q7
let birthYear = prompt("Year of Birth:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;

if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// Q8
let challenge = "30 Days Of JavaScript";
// Q9
console.log(challenge.toUpperCase());
// Q10
console.log(challenge.toLowerCase());
// Q11
console.log(challenge.slice(3));
// Q12
console.log(challenge.slice(0, 2));
// Q13
console.log(challenge.includes("Script")); 
// Q14
console.log(challenge.indexOf("a")); 
// Q15
console.log(challenge.lastIndexOf("a"));
// Q16
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); 
// Q17
console.log(challenge.startsWith("30 ")); 
// Q18
console.log(challenge.endsWith("JavaScript"));
// Q19
console.log(Math.floor(Math.random() * 101));
// Q20a
let a = 35;
let b = 23;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// Q20b


// Q21
let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score < 80) {
  console.log("Grade: B");
} else if (score >= 60 && score < 70) {
  console.log("Grade: C");
} else if (score >= 50 && score < 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
