"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false
console.log(3 == "3"); // prediction: true
console.log("5" - 1); // prediction: 4
console.log("5" + 1); // prediction: "51"
console.log(1 + true); // prediction: 2
console.log(10 >= 10); // prediction: true
console.log(!(5 > 2)); // prediction: false
console.log(4 !== "4"); // prediction: true
console.log("b" > "a"); // prediction: true
console.log(0 === -0); // prediction: true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

const temperature = 30;

if (temperature >= 15) {
  console.log("T-shirt is enough");
} else {
  console.log("Its cold outside. Wear a jacket");
}
// const temperature= 8 Output: Its cold outside. Wear a jacket
//const temperature = 30 Output: T-shirt is enough
// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.
const orderSize = 3;

if (orderSize > 12) {
  console.log("You will get a free gift with your order");
} else if (orderSize > 6) {
  console.log("You qualify for a free delivery");
} else {
  console.log(
    "Add more items to the shopping cart to qualify for a free delivery",
  );
}
//When the first condition of the " else if" is true, program stops checking other parameters. Because it is checked in order, from top to bottom. Order is important.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

console.log(Boolean(false)); // prediction: falsy (correct)
console.log(Boolean(0)); // prediction: falsy (correct)
console.log(Boolean("0")); // prediction: falsy (wrong-truthy because its a string and not empty)
console.log(Boolean("")); // prediction: falsy (correct)
console.log(Boolean(" ")); // prediction: truthy (correct)
console.log(Boolean("bread")); // prediction: truthy (correct)
console.log(Boolean(null)); // prediction: falsy (correct)
console.log(Boolean(undefined)); // prediction: falsy (correct)

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}

//corrected to a switch statement

const day1 = "Sunday";
switch (day1) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
}
// if day is "Saturday ", prints: "Open 7:00 to 14:00"
// if day is "Monday ", prints: "Closed today"
// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
if (shopStatus === "open") {
  console.log("Welcome in");
}
//shopStatus used to show =, which changed the value of shopStatus to "open" leading to "Welcome In", even though the shop is closed. I changed it to ===, which would strictly compare the value
// instead of reassigning it.

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
//Used to show "Medium" followed by "Large" output, which is incorrect. I fixed it by adding breaks.
// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

// Leap year checker program
function checkLeap(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

console.log("Leap Year check below");
console.log(`2024: ${checkLeap(2024)}`);
console.log(`2024: ${checkLeap(1900)}`);
console.log(`2024: ${checkLeap(2000)}`);

//fizzBuzz program

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

console.log("FizzBuzz Program below");
console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(20));
console.log(fizzBuzz(8));
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
