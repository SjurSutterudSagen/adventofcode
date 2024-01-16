import { open } from "node:fs/promises";
import type { Games } from "../types/Games";

export async function readFile(filePath: string): Promise<Games> {
  const file = await open(filePath);
  let games: Games = [];

  for await (const line of file.readLines()) {
    games.push(line.toString());
  }

  file.close();

  return games;
}
