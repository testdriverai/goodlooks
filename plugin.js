import bufferToDataUrl from "buffer-to-data-url";
const http = require("https");

let apiKey = null;

module.exports = {
  configure: function (key) {
    apiKey = key;
  },
  goodlooks: async function (page, assertion) {
    let screenshot = await page.screenshot({ encoding: "base64" });

    // const url = "http://localhost:3005/v1/lgtm";
    const url = "https://lgtm-main-80a621c.d2.zuplo.dev/v1/lgtm";

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenshot: bufferToDataUrl("image/png", screenshot),
        assertion,
      }),
    };

    let result = await fetch(url, options);

    let json;
    try {
      json = await result.json();
    } catch (e) {
      console.log(result);
      throw "API Error. Please verify your API key and account https://lgtm-main-80a621c.d2.zuplo.dev/docs/routes/~pricinghttps://lgtm-main-80a621c.d2.zuplo.dev/docs/routes/~pricing.";
    }

    if (json.indexOf("PASS") > -1) {
      let message = `GoodLooks.ai ${json}`;
      console.log(message);

      return {
        pass: true,
        message: () => `GoodLooks.ai ${json}`,
        name: "GoodLooks.ai",
        expected: true,
        actual: true,
      };
    } else {
      return {
        pass: false,
        message: () => `GoodLooks.ai ${json}`,
        name: "GoodLooks.ai",
        expected: true,
        actual: false,
      };
    }
  },
};
