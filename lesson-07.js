"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const brownie = {
  name: "Chocolate pistachio brownie",
  price: 5.8,
  vegetarian: false,
  allergens: ["peanuts", "wheat"],
};

console.log(brownie.name);
console.log(brownie.price);

const field = "name";
console.log(brownie[field]);
//Bracket notation is useful when property name might change or  when the key is not known before program runs.
//For example, on the website, i could search for anything: allergens, ingredients, so "name" could mean anything, thats why bracket notation is best to use here.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
const brownie2 = {
  name: "Chocolate pistachio brownie",
  price: 5.8,
  vegetarian: false,
  allergens: ["peanuts", "wheat"],
  describe: function () {
    return `${this.name} costs ${this.price} euros`;
  },
};
console.log(brownie2.describe());
// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menu = [
  { name: "Pecan pie", price: 5.2, vegetarian: true },
  { name: "Tiramisu", price: 3.8, vegetarian: false },
  { name: "Mochi", price: 5.1, vegetarian: true },
  { name: "Pahvala", price: 2.3, vegetarian: true },
  { name: "Pannacota", price: 3.2, vegetarian: false },
];

for (const items of menu) {
  console.log(`${items.name} costs ${items.price} euros`);
}
// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegItems = menu
  .filter((item) => item.vegetarian)
  .map((item) => item.name);
console.log("Vegetarian items:", vegItems);

const cheap = menu.find((item) => item.price < 3.0);
console.log("First item under €3.00:", cheap);
//Find() returns undefined when nothing matches.
// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const tiramisu = {
  name: "Tiramisu",
  price: 3.8,
  vegetarian: false,
};
console.log("Tiramisu Keys:", Object.keys(tiramisu));
console.log("Tiramisu Values:", Object.values(tiramisu));

console.log("for..of loop for tiramisu:");
for (const [key, value] of Object.entries(tiramisu)) {
  console.log(`${key}: ${value}`);
}
// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const copytiramisu = tiramisu;
copytiramisu.price = 7;
console.log(tiramisu.price);

const realCopytiramisu = { ...tiramisu, price: 9 };
console.log(tiramisu.price, realCopytiramisu.price);
// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const splitWords = sentence.split(" ");
const counter = {};
for (let i = 0; i < splitWords.length; i++) {
  const word = splitWords[i];
  if (counter[word] === undefined) {
    counter[word] = 0;
  }
  counter[word] = counter[word] + 1;
}
console.log(counter);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
