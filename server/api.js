// packages to make an API Call
import { Configuration, OpenAIApi } from "openai";
// Allow us to use info in the .env file
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;
// To access on the info in the .env file - process.env.nameofvariable

if (!openaiApiKey) {
  console.error("OPENAI_API_KEY is not set!");
  process.exit(1);
}
