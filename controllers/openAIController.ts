import { openai } from "../config/openaiConfig";

interface CompletionResponse {
  message: {
    content: string;
  };
}

export async function generateMeta(title: string): Promise<void> {
  try {
    const description = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Come up with a description for a YouTube video called ${title}`,
        },
      ],
      model: "gpt-4.1-nano-2025-04-14",
      max_tokens: 100,
    });

    console.log(description.choices[0].message);

    const tags = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Come up with 10 keywords for a YouTube video called ${title}`,
        },
      ],
      model: "gpt-4.1-nano-2025-04-14",
      max_tokens: 100,
    });

    console.log(tags.choices[0].message);
  } catch (error) {
    console.error('Error generating meta:', error);
    throw error;
  }
}
