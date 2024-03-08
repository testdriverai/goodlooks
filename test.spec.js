const { test, expect } = require("@playwright/test");

const lgtm = require("./plugin.js");

expect.extend(lgtm);

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).lgtm("shows the playwright logo");
});

test("github homepage", async ({ page }) => {
  await page.goto("https://github.com/");
  await expect(page).lgtm("6 brand logos show up");
});

test("ycombinator", async ({ page }) => {
  await page.goto("https://news.ycombinator.com");
  await expect(page).lgtm("there is an orange strip at the top of the page");
});

test("nytimes", async ({ page }) => {
  await page.goto("https://www.nytimes.com/");

  await expect(page).lgtm("there is an ad on the homepage");
  await expect(page).lgtm("there is someting political on the homepage");
});

test("eloquent", async ({ page }) => {
  await page.goto("https://eloquentjavascript.net/");
  await expect(page).lgtm("there is bird on this page");
});

test("zombo", async ({ page }) => {
  await page.goto("https://zombo.com/");
  await expect(page).lgtm("page is colorful");
});

test("rickroll", async ({ page }) => {
  await page.goto("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await expect(page).lgtm("video is not playing");
});
