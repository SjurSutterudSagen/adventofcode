const { open } = require("node:fs/promises");

function findFirstDigit(puzzleLineString) {
  const firstDigit = puzzleLineString
    .toString()
    .split("")
    .find((char) => !isNaN(parseInt(char)));

  return firstDigit;
}

function findSecondDigit(puzzleLineString) {
  const secondDigit = puzzleLineString
    .toString()
    .split("")
    .findLast((char) => !isNaN(parseInt(char)));

  return secondDigit;
}

function combineNumbersToString(firstDigit, secondDigit) {
  const combinedNumber = firstDigit.toString() + secondDigit.toString();

  return combinedNumber;
}

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

readFile().then((stringArray) => {
  const sumOfNumbers = parseCombinedNumbers(stringArray);

  console.log("The sum is: " + sumOfNumbers);
}).catch((err) => {
  console.log(err);
});
