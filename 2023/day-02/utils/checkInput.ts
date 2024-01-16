import { ParsedGames, CubeSet } from "../types/Games";

export function checkInput(
  parsedGames: ParsedGames,
  maxAmounts: CubeSet
): number[] {
  let sumOfValidGameIds = 0;
  let powerOfCubes = 0;
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
    let highestRed = 0;
    let highestGreen = 0;
    let highestBlue = 0;

    // for each game set
    game.gameSets.forEach((gameSet) => {
      // for each color
      gameSet.forEach((cube) => {
        // check if amount exceeds max amount
        const cubeAmount = cube[0];
        const cubeColor = cube[1];

        if (cubeColor === "red") {
          // check if amount is higher than highest red
          if (cubeAmount > highestRed) {
            highestRed = cubeAmount;
          }

          // invalid game
          if (cubeAmount > maxRed) {
            isValidGame = false;
          }
        }
        if (cubeColor === "green") {
          // check if amount is higher than highest green
          if (cubeAmount > highestGreen) {
            highestGreen = cubeAmount;
          }

          // invalid game
          if (cubeAmount > maxGreen) {
            isValidGame = false;
          }
        }
        if (cubeColor === "blue") {
          // check if amount is higher than highest blue
          if (cubeAmount > highestBlue) {
            highestBlue = cubeAmount;
          }

          // invalid game
          if (cubeAmount > maxBlue) {
            isValidGame = false;
          }
        }
      });
    });

    if (isValidGame) {
      sumOfValidGameIds += game.gameId;
    }

    const powerOfCubesForGame = highestRed * highestGreen * highestBlue;
    powerOfCubes += powerOfCubesForGame;
  });

  return [sumOfValidGameIds, powerOfCubes];
}
