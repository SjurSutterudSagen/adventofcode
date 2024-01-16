import { ParsedGames, CubeSet } from "../types/Games";

export function checkInput(
  parsedGames: ParsedGames,
  maxAmounts: CubeSet
): number {
  let sumOfValidGameIds = 0;
  let maxRed: number;
  let maxGreen: number;
  let maxBlue: number;

  if (maxAmounts.length > 0) {
    for (let i = 0; i < maxAmounts.length; i++) {
      if (maxAmounts[i][1] === "red") {
        maxRed = maxAmounts[i][0];
      }
      if (maxAmounts[i][1] === "green") {
        maxGreen = maxAmounts[i][0];
      }
      if (maxAmounts[i][1] === "blue") {
        maxBlue = maxAmounts[i][0];
      }
    }
  }

  //check input against rules
  // for each game
  parsedGames.forEach((game) => {
    let isValidGame = true;

    // for each game set
    game.gameSets.forEach((gameSet) => {
      // for each color
      gameSet.forEach((cube) => {
        // check if amount exceeds max amount
        const cubeAmount = cube[0];
        const cubeColor = cube[1];

        if (cubeColor === "red" && cubeAmount > maxRed) {
          // invalid game
          isValidGame = false;
        }
        if (cubeColor === "green" && cubeAmount > maxGreen) {
          // invalid game
          isValidGame = false;
        }
        if (cubeColor === "blue" && cubeAmount > maxBlue) {
          // invalid game
          isValidGame = false;
        }
      });
    });

    if (isValidGame) {
      sumOfValidGameIds += game.gameId;
    }
  });

  return sumOfValidGameIds;
}
