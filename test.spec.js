const { test, expect } = require("@playwright/test");

const lgtm = require("./plugin.js");

expect.extend(lgtm);

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await expect(page).lgtm("shows the playwright logo");
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();

  // for some rason this does not wait for page to be loaded

  await expect(page).lgtm("shows the text 'introduction'");
});

test("github homepage", async ({ page }) => {
  await page.goto("https://github.com/");

  await expect(page).lgtm("6 brand logos show up");
});

test("ycombinator", async ({ page }) => {
  await page.goto("https://news.ycombinator.com");

  await expect(page).lgtm("the header is blue");
  await expect(page).lgtm("the header is orange");
  await expect(page).lgtm("the header is not blue");
  await expect(page).lgtm("the header is blue");
});

test("nytimes", async ({ page }) => {
  await page.goto("https://www.nytimes.com/");

  await expect(page).lgtm("there is an ad on the homepage");
  await expect(page).lgtm("there is someting political on the homepage");
});
