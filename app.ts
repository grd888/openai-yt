import * as readline from "node:readline";
import { generateMeta } from "./controllers/openAIController";

interface AppOptions {
  title: string;
}

async function main(options: AppOptions): Promise<void> {
  try {
    await generateMeta(options.title);
  } catch (error) {
    console.error("Error in main:", error);
    process.exit(1);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("YouTube Video Title: \n", (title) => {
  if (!title) {
    console.error("Please provide a video title");
    process.exit(1);
  }
  main({ title });
});