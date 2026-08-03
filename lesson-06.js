"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["Muffin", "Cheesecake", "Pie", "Donut", "Brownie"];
console.log("Whole array:", menu);
console.log("First item:", menu[0]);
console.log("Last item:", menu[menu.length - 1]);
console.log("Array length:", menu.length);
// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

//push-adding item to the end
menu.push("croissant");
console.log("Push result:", menu);
//unshift-adding item to the beginning
menu.unshift("macaron");
console.log("Unshift result:", menu);
//pop-removing last item from the array
menu.pop();
console.log("Pop result:", menu);
//shift-removing the first item from the array
menu.shift();
console.log("Shift result:", menu);
// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
console.log("For loop:");
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
//use for loop if exact index position in array is required, full control
console.log("for..of loop");
for (const menuItem of menu) {
  console.log(menuItem);
}
//use for..of loop when i need all items in array, every item directly

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
const display = prices.map((price) => `This item costs:${price}EUR`);
console.log("Map example: ", display);

const affordable = prices.filter((price) => price < 5);
console.log("Filter example: ", affordable);

const expensive = prices.find((price) => price > 10);
console.log("Find example: ", expensive);
//forEach always returns undefined, because it acts on each item
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];
artists.push("Chase Atlantic");
for (const artist of artists) {
  console.log(`=== ${artist} ===`);
  console.log(`Listen to ${artist} now on every platform`);
}

//I didnt have to change the loop itself since it automatically includes the new added artist to the array.
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const menu2 = menu;
menu2.push("Gelato");
console.log("Shared reference output:");
console.log("menu:", menu);
console.log("menu2:", menu2);

const menuCopy = [...menu];
menuCopy.push("Waffle");
console.log("Copy output:");
console.log("Copy menu length:", menuCopy.length);
console.log("Original menu length:", menu.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum:", sum);

let largest = numbers[0];
for (const num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log("Largest value:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

let string = "cat";
let backwards = string.split("").reverse().join("");
console.log(backwards);

let string2 = "cat says meow";
let vowels = "aeiou";
let varcount = string2
  .split("")
  .filter((letter) => vowels.includes(letter)).length;
console.log(varcount);

function isPalin(word) {
  let lowercase = word.toLowerCase();
  let backwards = lowercase.split("").reverse().join("");
  return lowercase === backwards;
}
console.log(isPalin("kayak"));
console.log(isPalin("rabbit"));
console.log(isPalin("rotor"));
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
