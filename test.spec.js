const { test, expect, devices } = require("@playwright/test");

const goodlooks = require("./plugin.js");
goodlooks.configure("zpka_c0d0539ada014283bc974f0fd55835ea_2b745cbf");

expect.extend(goodlooks);

test("is mobile responsive", async ({ page }) => {
  page.setViewportSize(devices["iPhone X"].viewport);
  await page.goto("https://cnn.com/");
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

test("github homepage", async ({ page }) => {
  await page.goto("https://github.com/");
  await expect(page).goodlooks("A row of logos appears on the page");
});

test("framer", async ({ page }) => {
  await page.goto("https://framer.com/");
  await page.waitForTimeout(5000);
  await expect(page).goodlooks("A request to enable cookies shows up");
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

test("failure", async ({ page }) => {
  await page.goto("https://github.com/");
  await expect(page).goodlooks("A giraffee shows up on the page");
});
