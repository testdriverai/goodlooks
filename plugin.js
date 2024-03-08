const OpenAI = require("openai");
const uuid = require("uuid");
import bufferToDataUrl from "buffer-to-data-url";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

module.exports = {
  lgtm: async (page, text) => {
    let screenshot = await page.screenshot({ encoding: "base64" });

    let prompt = `You are part of a test suite that will visually validate some assertion. The test suite is running on a website and has taken a screenshot of the page which will be supplid to you."`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: `You are part of a test framework, responsible for validating screenshots taken of web pages. You must visually validate that the supplied condition is true. Provide your answer in JSON structure like this {"pass": "<true or false>", "reason": "<An explanation of why you chose your response. Do not reference the image, reference the page instead.>"}`,
        },
        {
          role: "user",
          content: [
            { type: "text", text },
            {
              type: "image_url",
              image_url: {
                url: bufferToDataUrl("image/png", screenshot),
              },
            },
          ],
        },
      ],
    });

    let json = JSON.parse(response.choices[0].message.content);
    if (json.pass === "true") {
      return {
        pass: true,
        message: () => `LGTM Pass: ${json.reason}`,
      };
    } else {
      return {
        pass: false,
        message: () => `LGTM Fail: ${json.reason}`,
      };
    }
  },
};
