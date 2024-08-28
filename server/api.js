// packages to make an API Call
import { Configuration, OpenAIApi } from "openai";
// Allow us to use info in the .env file
import dotenv from "dotenv";
dotenv.config();

const openAiApiKey = process.env.OPENAI_API_KEY;
// To access on the info in the .env file - process.env.nameofvariable

if (!openaiApiKey) {
  console.error("OPENAI_API_KEY is not set!");
  process.exit(1);
}

// Set up the configuration of Open AI Client
const configuration = new Configuration({
  apiKey: openAiApiKey,
});

// Create Open AI object
const openai = new OpenAIApi(configuration);

export default openai;
