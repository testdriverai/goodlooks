import bufferToDataUrl from "buffer-to-data-url";
const http = require("https");

module.exports = function (key) {
  if (!key) {
    throw "Must supply api key. Get it at https://goodlooks.ai";
  }

  return {
    goodlooks: async function (page, assertion) {
      if (!assertion.length) {
        throw "Must supply assertion";
      }

      if (!page) {
        throw "Could not get page object";
      }

      let screenshot = await page.screenshot({ encoding: "base64" });

      // const url = "http://localhost:3005/v1/goodlooks";
      const url = "https://lgtm-main-80a621c.d2.zuplo.dev/v1/lgtm";
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          screenshot: bufferToDataUrl("image/png", screenshot),
          assertion,
        }),
      };

      let result = await fetch(url, options);

      console.log(result.body());

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
};
