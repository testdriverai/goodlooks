import bufferToDataUrl from "buffer-to-data-url";
const http = require("https");

module.exports = {
  goodlooks: async function (page, assertion) {
    let screenshot = await page.screenshot({ encoding: "base64" });

    // const url = "http://localhost:3005/v1/goodlooks";
    const url = "https://goodlooks-main-80a621c.d2.zuplo.dev/v1/goodlooks";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer zpka_05acaa405814447ba022449aa073fef5_78748307",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenshot: bufferToDataUrl("image/png", screenshot),
        assertion,
      }),
    };

    let result = await fetch(url, options);
    let json = await result.json();

    if (json.indexOf("PASS") > -1) {
      return {
        pass: true,
        message: () => `goodlooks.sh ${json}`,
        name: "goodlooks",
        expected: true,
        actual: true,
      };
    } else {
      return {
        pass: false,
        message: () => `goodlooks.sh ${json}`,
        name: "goodlooks",
        expected: true,
        actual: false,
      };
    }
  },
};
