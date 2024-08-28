import openaiClient from "./api.js";

// SQL query:\n\n${queryDescription}. -> '.'
const generate = async (queryDescription) => {
  const daVinci = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003", // text-complation api
      prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}.`,
      max_tokens: 100, // max length of the res
      temperature: 0, //0 to 10 (0 means no creativity, 10 means high creativity) - 0 return exactly same completion every time - 10 generates brand names, pet names etc.
    });
    return response.data.choices[0].text;
  };

  const chatGptApi = async (queryDescription) => {
    const message = [
      {
        role: "system",
        content: `You are a translator from plain English to SQL.`,
      },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query:\n\nShow all the elements in the table users`,
      },
      { role: "assistant", content: "SELECT * FROM users;" },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
      },
    ];
  };

  return await daVinci(queryDescription);
};

export default generate;
