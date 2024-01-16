import { readFile } from "./utils/read-file";
import { parseInput } from "./utils/parseInput";
import { checkInput } from "./utils/checkInput";

import { ParsedGames, CubeSet } from "./types/Games";

const puzzleDay02Pt1MaxColorAmounts: CubeSet = [
  [12, "red"],
  [13, "green"],
  [14, "blue"],
];

//const file = "./data/input-example-pt1.txt";
const file = "./data/input-pt1.txt";

export default function puzzleDay02(filePath: string): void {
  let parsedGames: ParsedGames = [];

  //read file into array string[]
  readFile(filePath).then((games) => {
    parsedGames = parseInput(games);

    const parsedResponse = checkInput(
      parsedGames,
      puzzleDay02Pt1MaxColorAmounts
    );

    const sumOfValidGameIds = parsedResponse[0];
    const cubePower = parsedResponse[1];

    console.log(`Sum of valid game ids: ${sumOfValidGameIds} and cubePower: ${cubePower}`);
  });
}

puzzleDay02(file);
