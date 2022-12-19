// const { Configuration, OpenAIApi } = require("openai");
import {Configuration, OpenAIApi} from "openai";
const configuration = new Configuration({
  apiKey: "slk-N7kvTRtEXedvFSOPxKkfT3BlbkFJoTx7Jk2kM4hbpJE9NiYk",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
console.log(response.data)