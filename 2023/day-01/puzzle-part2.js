const { open } = require("node:fs/promises");

const numbersAsStrings = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

/**
 * This function finds the first digit in a string.
 * @param {string} puzzleLineString
 * @returns {string}
 * */
function findFirstDigit(puzzleLineString) {
  const firstDigit = puzzleLineString
    .toString()
    .split("")
    .find((char) => !isNaN(parseInt(char)));

  return firstDigit;
}

/** 
 * This function finds the second digit in a string.
 * @param {string} puzzleLineString
 * @returns {string}
 * */
function findSecondDigit(puzzleLineString) {
  const secondDigit = puzzleLineString
    .toString()
    .split("")
    .findLast((char) => !isNaN(parseInt(char)));

  return secondDigit;
}

/**
 * This function combines two digits into a string.
 * @param {number} firstDigit
 * @param {number} secondDigit
 * @returns {string}
 * */
function combineNumbersToString(firstDigit, secondDigit) {
  const combinedNumber = firstDigit.toString() + secondDigit.toString();

  return combinedNumber;
}

function replaceStringsWithNumbers(arrayOfNumbersAsStrings, puzzleLineString) {

}

/**
 * This function parses an array of strings and returns the sum
 * of all combined numbers.
 * @param {string[]} inputArr
 * @returns {number}
 * */
function parseCombinedNumbers(inputArr) {
  let totalSum = 0;

  inputArr.forEach((puzzleLine) => {
    const firstDigit = findFirstDigit(puzzleLine);
    const secondDigit = findSecondDigit(puzzleLine);
    const combinedNumber = combineNumbersToString(firstDigit, secondDigit);

    totalSum += parseInt(combinedNumber);
  });

  return totalSum;
}

async function readFile() {
  const file = await open("puzzle-input.txt");
  let inputArray = [];

  for await (const line of file.readLines()) {
    inputArray.push(line.toString());
  }

  return inputArray;
}

readFile()
  .then((stringArray) => {
    const sumOfNumbers = parseCombinedNumbers(stringArray);

    console.log("The sum is: " + sumOfNumbers);
  })
  .catch((err) => {
    console.log(err);
  });
