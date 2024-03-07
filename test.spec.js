const { test, expect } = require("@playwright/test");

const lgtm = require("./plugin.js");

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // for some reason it's race conditoin
  await lgtm(page, "shows the playwright logo");
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
  await lgtm(page, "show this discord logo");
});
