"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const cafeName = "Rabbit Cafe";
const openingHour = "10:00";
const closingHour = "18:00";

const greeting = `Welcome to ${cafeName}! We are open from ${openingHour} till ${closingHour}`;
console.log(greeting);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

const messy = "   Maison   Sarah, fresh bread daily   ";

console.log(
  messy
    .trim() // Remove spaces from beginning and end
    .replaceAll("bread", "cakes") //replace bread with cakes
    .toUpperCase() // Convert characters to uppercase
    .replace(/\s+/g, " "), //remove multiple spaces between maison and sarah, and replacing it with 1 space
);

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

//The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length);
console.log(product.indexOf("Sourdough Loaf"));
console.log(product.slice(0, 14));
console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice + netPrice * taxRate;
console.log(`Final price equals to: ${finalPrice.toFixed(2)}€`); //Formatting space comes last because toFixed turns a number
//to a string. Therefore it would not be possible to perform any mathematical manipulations on it afterwards.
// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const roll1 = Math.floor(Math.random() * 6) + 1;
console.log(roll1);

const roll2 = Math.floor(Math.random() * 11) + 10;
console.log(roll2);
//Math.random() generates a number from 0 up to 1(but never including 1)
//Math.random() * 11 stretches to reach 11, but never 11 itself
//Math.floor rounds to the closest whole number
//+10 makes sure that we start from 10, shift the entire range up. Every result we get, gets 10 added to it. 10 is the minimum result one can get
//at the end of this recipe.
// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

const poem = "Tyger ";

console.log(`${poem.repeat(2)} burning bright, 
In the forests of the night,
What immortal hand or eye, 
Could frame thy fearful symmetry?`);

//repeat() method helps to copy (multiply) a string of interest several times. Eg: repeat(number)

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "John";
const lastName = "Doe";
const newUsername =
  firstName.slice(0, 1).toLowerCase() + lastName.toLowerCase();
console.log(newUsername);

const adjective = "small";
const noun = "kitten";
const verb = "curls";
const place = "on my lap";
console.log(
  `A ${adjective} ${noun} ${verb} up ${place}. I am the happiest person in the whole world!`,
);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
