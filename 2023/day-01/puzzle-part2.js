const { open } = require("node:fs/promises");

const numbersAsStrings = [
  { string: "one", number: 1 },
  { string: "two", number: 2 },
  { string: "three", number: 3 },
  { string: "four", number: 4 },
  { string: "five", number: 5 },
  { string: "six", number: 6 },
  { string: "seven", number: 7 },
  { string: "eight", number: 8 },
  { string: "nine", number: 9 },
];

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

/**
 * This function replaces all strings with numbers.
 * @param {string} puzzleLineString
 * @param {object[]} numbersAsStringsArray
 * */
function replaceStringsWithNumbers(puzzleLineString, numbersAsStringsArray) {
  let newString = puzzleLineString;

  // numbersAsStringsArray.forEach((number) => {
  //   if (puzzleLineString.includes(number.string)) {
  //     newString = newString.replaceAll(number.string, number.number);
  //   }
  // });

  return newString;
}

/**
 * This function parses an array of strings and returns the sum
 * of all combined numbers.
 * @param {string[]} inputArr
 * @returns {number}
 * */
function parseCombinedNumbers(inputArr, numbersAsStringsArray) {
  let totalSum = 0;

  inputArr.forEach((puzzleLine) => {
    const puzzleLineWithStringsReplaced = replaceStringsWithNumbers(
      puzzleLine,
      numbersAsStringsArray
    );

    console.log("PuzzleLine: " + puzzleLine);
    console.log("PusslelineReplace: " + puzzleLineWithStringsReplaced);

    const firstDigit = findFirstDigit(puzzleLineWithStringsReplaced);
    const secondDigit = findSecondDigit(puzzleLineWithStringsReplaced);
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
    const sumOfNumbers = parseCombinedNumbers(stringArray, numbersAsStrings);

    console.log("The sum is: " + sumOfNumbers);
  })
  .catch((err) => {
    console.log(err);
  });
