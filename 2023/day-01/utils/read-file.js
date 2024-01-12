import { open } from "node:fs/promises";

export async function readFile(filePath) {
    const file = await open(filePath);
    let inputArray = [];

    for await (const line of file.readLines()) {
        inputArray.push(line.toString());
    }

    return inputArray;
}