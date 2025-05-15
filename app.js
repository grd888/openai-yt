import * as readline from "node:readline";
import { generateMeta } from "./controllers/openAIController.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("YouTube Video Title: \n", generateMeta);