import bufferToDataUrl from "buffer-to-data-url";
const http = require("https");

module.exports = {
  lgtm: async function (page, assertion) {
    let screenshot = await page.screenshot({ encoding: "base64" });

    const url = "http://localhost:3005/v1/lgtm"; // "https://lgtm-main-80a621c.d2.zuplo.dev/v1/lgtm";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_KEY_HERE",
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
        message: () => `LGTM.sh ${json}`,
        name: "LGTM",
        expected: true,
        actual: true,
      };
    } else {
      return {
        pass: false,
        message: () => `LGTM.sh ${json}`,
        name: "LGTM",
        expected: true,
        actual: false,
      };
    }
  },
};
