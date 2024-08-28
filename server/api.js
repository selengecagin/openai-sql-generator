// packages to make an API Call
import OpenAI from "openai";
// Allow us to use info in the .env file
import dotenv from "dotenv";
dotenv.config();

const openAiApiKey = process.env.OPENAI_API_KEY;
// To access on the info in the .env file - process.env.nameofvariable
if (!openAiApiKey) {
  console.error("OPENAI_API_KEY is not set!");
  process.exit(1);
}

// Create Open AI object
const openai = new OpenAI({
  apiKey: openAiApiKey,
});

export default openai;
