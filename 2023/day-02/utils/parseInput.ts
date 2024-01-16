import {
  Cube,
  CubeSet,
  CubeSets,
  Game,
  Games,
  ParsedGames,
} from "../types/Games";

export function parseInput(games: Games): ParsedGames {
  let parsedGames: ParsedGames = [];

  games.map((gameAsString) => {
    const gameSplit = gameAsString.split(":"); // Split the game into gameId and gameScores
    const gameId = parseInt(gameSplit[0].split(" ")[1]);
    let gameSets: CubeSets = [];

    gameSplit[1].split(";").map((gameSetAll) => {
      // Split the gameScores into single scores
      const scoreSplit = gameSetAll.split(",");
      let gameSet: CubeSet = [];

      scoreSplit.map((cubeSet) => {
        const singleScore = cubeSet.trim().split(" ");
        const scoreAmount = parseInt(singleScore[0]);
        const scoreColor = singleScore[1];
        const score: Cube = [scoreAmount, scoreColor];

        gameSet.push(score);
      });

      gameSets.push(gameSet);
    });

    const game: Game = {
      gameId: gameId,
      gameSets: gameSets,
    };

    parsedGames.push(game);
  });
  return parsedGames;
}
