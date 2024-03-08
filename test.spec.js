const { test, expect } = require("@playwright/test");

const goodlooks = require("./plugin.js")('zpka_05acaa405814447ba022449aa073fef5_78748307');

expect.extend(goodlooks);

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).goodlooks("shows the playwright logo");
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

test("eloquent", async ({ page }) => {
  await page.goto("https://eloquentjavascript.net/");
  await expect(page).goodlooks("there is bird on this page");
});

test("zombo", async ({ page }) => {
  await page.goto("https://zombo.com/");
  await expect(page).goodlooks("page is colorful");
});

test("rickroll", async ({ page }) => {
  await page.goto("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await expect(page).goodlooks("video is not playing");
});
