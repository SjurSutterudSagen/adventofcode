import { readFile } from "./utils/read-file.js";
import { numbersAsStrings } from "./data/numbers-as-strings.js";
import { parseCombinedNumbers } from "./utils/parse-digits.js";
import { checkIfAnswerIsWrong } from "./utils/check-if-answer-is-wrong.js";

const puzzleInputFilePath = "./data/puzzle-input.txt";
//const puzzleInputFilePath = "./data/example-input.txt";

readFile(puzzleInputFilePath)
  .then((stringArray) => {
    const sumOfNumbers = parseCombinedNumbers(stringArray, numbersAsStrings, true);
    const isAnswerWrong = checkIfAnswerIsWrong(sumOfNumbers, 2);

    if (isAnswerWrong === true) {
      console.log("The answer is wrong!");
    }

    console.log("The sum is: " + sumOfNumbers);
    
  })
  .catch((err) => {
    console.log(err);
  });
