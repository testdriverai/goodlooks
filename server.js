const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));

const port = process.env.PORT || 3005;

app.post("/v1/goodlooks", async (req, res) => {
  console.log("request made");

  console.log("assertion", req.body.assertion);

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    max_tokens: 500,
    messages: [
      {
        role: "system",
        content: `You are part of a test framework, responsible for validating screenshots taken of web pages. You must visually validate that the supplied condition is true. Provide an answer, you must include PASS or FAIL and an explanation of why you chose your response. Do not reference the image, reference the page instead.>"}`,
      },
      {
        role: "user",
        content: [
          { type: "text", text: req.body.assertion },
          {
            type: "image_url",
            image_url: {
              url: req.body.screenshot,
            },
          },
        ],
      },
    ],
  });

  let json = response.choices[0].message.content;

  console.log(json);

  return res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
