import openaiClient from "./api.js";

// SQL query:\n\n${queryDescription}. -> '.' 
const generate = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}.`,
    max_tokens: 100, // max length of the res
    temperature: 0, //0 to 10 (0 means no creativity, 10 means high creativity) - 0 return exactly same completion every time - 10 generates brand names, pet names etc.
  })
  return response.data.choices[0].text
};

export default generate
