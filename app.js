import { client } from "./config/openaiConfig.js";

const response = await client.responses.create({
    model: "gpt-4.1-nano",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);