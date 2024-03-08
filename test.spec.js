const { test, expect, devices } = require("@playwright/test");

const goodlooks = require("./plugin.js");
goodlooks.configure("zpka_05acaa405814447ba022449aa073fef5_78748307");

expect.extend(goodlooks);

test("is mobile responsive", async ({ page }) => {
  await page.goto("https://cnn.com/");
  page.setViewportSize(devices["iPhone X"].viewport);
  await expect(page).goodlooks("should be mobile responsive");
});

test("correct image appears", async ({ page }) => {
  await page.goto("https://eloquentjavascript.net/");
  await expect(page).goodlooks("there is bird on this page");
});

test("diversity", async ({ page }) => {
  await page.goto("https://diversityequityinclusion.com/about/");
  await expect(page).goodlooks("diverse people show up");
});

test("is mobile responsive 2", async ({ page }) => {
  page.setViewportSize(devices["iPhone X"].viewport);
  await page.goto("https://early-nonogon-415595.framer.app/");
  await expect(page).goodlooks("is mobile responsive");
});

test("github homepage", async ({ page }) => {
  await page.goto("https://github.com/");
  await expect(page).goodlooks("6 brand logos show up");
});

test("ycombinator", async ({ page }) => {
  await page.goto("https://news.ycombinator.com");
  await expect(page).goodlooks(
    "there is an orange strip at the top of the page"
  );
});

test("nytimes", async ({ page }) => {
  await page.goto("https://www.nytimes.com/");

  await expect(page).goodlooks("there is an ad on the homepage");
  await expect(page).goodlooks("there is someting political on the homepage");
});

test("zombo", async ({ page }) => {
  await page.goto("https://zombo.com/");
  await expect(page).goodlooks("page is colorful");
});

test("rickroll", async ({ page }) => {
  await page.goto("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await expect(page).goodlooks("video is not playing");
});
