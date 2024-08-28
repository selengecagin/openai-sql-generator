import openaiClient from "./api.js";

// SQL query:\n\n${queryDescription}. -> '.' 
const generate = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}.`,
    max_tokens: 100,
    temperature: 0,
  });
};
