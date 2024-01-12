const wrongAnswersFromWebsitePuzzle1 = [];

// correct answer: 54578
const wrongAnswersFromWebsitePuzzle2 = [
    54145,
    54558,
    54528
];
  
export function checkIfAnswerIsWrong(answer, puzzlePartNumber) {
    let isWrong = false;

    if (puzzlePartNumber === 1) {
        isWrong = wrongAnswersFromWebsitePuzzle1.includes(answer);
    }
    if (puzzlePartNumber === 2) {
        isWrong = wrongAnswersFromWebsitePuzzle2.includes(answer);
    }

    return isWrong;
}
