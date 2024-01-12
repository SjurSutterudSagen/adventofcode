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
 * This function finds the last digit in a string.
 * @param {string} puzzleLineString
 * @returns {string}
 * */
function findLastDigit(puzzleLineString) {
    const lastDigit = puzzleLineString
        .toString()
        .split("")
        .findLast((char) => !isNaN(parseInt(char)));

    return lastDigit;
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

    Object.entries(numbersAsStringsArray).forEach((digitStrArr) => {
        newString = newString.replaceAll(digitStrArr[0], digitStrArr[1]);

    });

    return newString;
}

/**
 * This function parses an array of strings and returns the sum
 * of all combined numbers.
 * @param {string[]} inputArr
 * @param {string[]} numbersAsStringsArray
 * @param {boolean} replaceStringDigits
 * @returns {number}
 * */
export function parseCombinedNumbers(
        inputArr,
        numbersAsStringsArray,
        replaceStringDigits = false
    ) {
    let totalSum = 0;
    let linesParsed = 0;
  
    inputArr.forEach((puzzleLine) => {
        let lineToParse = puzzleLine;

        if (replaceStringDigits === true) {
            lineToParse = replaceStringsWithNumbers(
                puzzleLine,
                numbersAsStringsArray
            );
        };

        const oldTotalSum = totalSum;
        const firstDigit = findFirstDigit(lineToParse);
        const lastDigit = findLastDigit(lineToParse);
        const combinedNumber = combineNumbersToString(firstDigit, lastDigit);

        totalSum += parseInt(combinedNumber);
        linesParsed++;

        // console.log(`
        // replaceStringDigits:    ${replaceStringDigits}
        // PuzzleLine:             ${puzzleLine}
        // PusslelineReplace:      ${lineToParse}
        // firstDigit:             ${firstDigit}
        // lastDigit:              ${lastDigit}
        // combinedNumber:         ${combinedNumber}
        // totalsDiff:             ${totalSum - oldTotalSum}
        // OldTotalSum:            ${oldTotalSum}
        // New totalSum:           ${totalSum}
        // `);
    });
  
    console.log(linesParsed + " lines parsed.");
    return totalSum;
}