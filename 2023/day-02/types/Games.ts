type CubeAmount = number;
type CubeColor = string;
export type Cube = [
  CubeAmount,
  CubeColor
];
export type CubeSet = Cube[];
export type CubeSets = CubeSet[];
export type GameId = number;
export type Game = {
  gameId: GameId;
  gameSets: CubeSets;
};
export type Games = string[];
export type ParsedGames = Game[];
