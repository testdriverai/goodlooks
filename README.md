![GoodLooks Logo](https://github.com/dashcamio/goodlooks/assets/318295/feb1d637-f1b0-48a2-8fd7-d4b855ad93bd)

# Visually Validate Playwright Tests Without Flaky Selectors

Static selectors break with code changes and can't prove that a site "looks good". Is that button really missing or was the `id` changed? Is the site responsive on mobile? Is the correct image showing? These kinds of tests are impossible to validate with selectors alone and take a lot of time to test manually. GoodLooks.ai lets you visually validate your web pages with natural language prompts instead of selectors.

Check out our other products: [TestDriver.ai](https://testdriver.ai/?ref=goodlooks) and [Dashcam.io](https://dashcam.io?ref=goodlooks).

## Quickstart

Install via NPM.

```
npm install goodlooks
```

Use in Playwright tests!

```js
const { test, expect, devices } = require("@playwright/test");
const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");
expect.extend(goodlooks);
```

# Examples

## Element Visiblity

Validate that a cookie banner shows up.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![Framer.com Cookie Banner](https://github.com/dashcamio/goodlooks/assets/318295/4a4f02a4-95f8-4ec7-a0cb-f411c5d6776a)


</td>
<td>
    
```js
const { test, expect } = require("@playwright/test");

const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

expect.extend(goodlooks);

test("framer", async ({ page }) => {
  await page.goto("https://framer.com/");
  await page.waitForTimeout(5000);
  await expect(page).goodlooks("A request to enable cookies shows up");
});

```

</td>
</tr>
<tr>
  <td colspan=2><strong>Result</strong></td>
</tr>
<tr>
  <td colspan=2>
<strong>✅ PASS.</strong> The page displays a request to enable cookies with a message stating "We use cookies to personalize content, run ads, and analyze traffic." and an "Okay" button to acknowledge the message.  </td>
</tr>
</table>

## Mobile Responsiveness

Ensure a page is rendering mobile view properly.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![CNN.com on mobile](https://github.com/dashcamio/goodlooks/assets/318295/277e87fb-4dd7-4a86-a011-02f5fc874342)

</td>
<td>
    
```js
const { test, expect, devices } = require("@playwright/test");

const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

expect.extend(goodlooks);

test("is mobile responsive", async ({ page }) => {
  page.setViewportSize(devices["iPhone X"].viewport);
  await page.goto("https://cnn.com/");

  await expect(page).goodlooks("should be mobile responsive");

});

```

</td>
</tr>
<tr>
  <td colspan=2><strong>Explanation</strong></td>
</tr>
<tr>
  <td colspan=2>
    <strong>✅ PASS.</strong> The page appears to be displayed in a mobile-responsive layout. The content is aligned correctly within the confines of a narrow screen typical of mobile devices. The text is legible, the menu collapses into a hamburger icon, and the image is scaled to fit the screen width, indicating that the design adapts to a mobile resolution.
  </td>
</tr>
</table>

## Image Contents

Ensure a page renders correct image contents via `img` or `canvas`.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![Eloquent Javascript](https://github.com/dashcamio/goodlooks/assets/318295/359e6df7-80ac-4cfe-afec-c25d426c57bb)


</td>
<td>
    
```js
const { test, expect, devices } = require("@playwright/test");

const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

expect.extend(goodlooks);

test("correct image appears", async ({ page }) => {
  await page.goto("https://eloquentjavascript.net/");
  await expect(page).goodlooks("there is bird on this page");
});

```

</td>
</tr>
<tr>
  <td colspan=2><strong>Result</strong></td>
</tr>
<tr>
  <td colspan=2>
<strong>✅ PASS.</strong> There is an illustration of a bird on the left side of the page on the cover of a book titled "Eloquent JavaScript, Fourth Edition."  </td>
</tr>
</table>

## Application State

Validate that the video player is not playing.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![Rick Astley YouTube](https://github.com/dashcamio/goodlooks/assets/318295/ab885bed-fba7-4ae7-b295-98f74c7392fa)

</td>
<td>
    
```js
const { test, expect } = require("@playwright/test");

const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

expect.extend(goodlooks);

test("rickroll", async ({ page }) => {
  await page.goto("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  await expect(page).goodlooks("video is not playing");
});

```

</td>
</tr>
<tr>
  <td colspan=2><strong>Result</strong></td>
</tr>
<tr>
  <td colspan=2>
<strong>✅ PASS.</strong> The page shows a video with the play button available and a timeline that is not progressing, indicating that the video is currently not playing. </td>
</tr>
</table>

## Color

Ensure a page renders correct image contents via `img` or `canvas`.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![CleanShot 2024-03-08 at 12 46 45](https://github.com/dashcamio/goodlooks/assets/318295/da5c057c-b28d-40fe-8adb-6e7c8f6e1899)


</td>
<td>
    
```js
const { test, expect, devices } = require("@playwright/test");

const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

expect.extend(goodlooks);

test("ycombinator", async ({ page }) => {
  await page.goto("https://news.ycombinator.com");
  await expect(page).goodlooks(
    "there is an orange strip at the top of the page"
  );
});

```

</td>
</tr>
<tr>
  <td colspan=2><strong>Result</strong></td>
</tr>
<tr>
  <td colspan=2>
<strong>✅ PASS.</strong> The page has an orange strip at the top, which is consistent with the given condition.</td>
</tr>
</table>

## Qualitative Image Contents

Ensure a diverse representation of people appears on the page. Of course, this judgement is left up to AI.

<table>
<tr>
<td><strong>Input</strong> </td> <td><strong>Code</strong></td>
</tr>
<tr>
<td> 
  
![CleanShot 2024-03-08 at 11 55 13](https://github.com/dashcamio/goodlooks/assets/318295/bb6e22ec-e1c7-4c99-b08b-e6740224b4cb)


</td>
<td>
    
```js
const { test, expect } = require("@playwright/test");
const goodlooks = require("goodlooks");
goodlooks.configure("YOUR_API_KEY");

test("diversity", async ({ page }) => {
  await page.goto("https://diversityequityinclusion.com/about/");
  await expect(page).goodlooks("diverse people show up");
});
```

</td>
</tr>
<tr>
  <td colspan=2><strong>Result</strong></td>
</tr>
<tr>
  <td colspan=2>
  <strong>✅ PASS.</strong> The page includes a collage of images featuring various individuals in different settings and professional environments, indicative of a diverse group of people. This aligns with the theme of "Diversity Equity Inclusion" that is prominently displayed on the page.
  </td>
</tr>
</table>

# Debugging

## It seems like GoodLooks is wrong? I'm sure the element exists that I'm checking for.

Run your playwright tests in UI mode:

```
npx playwright test --ui
```

1. Check the log to see the time frame where the `goodlooks` check is called. Hover over that.
2. A red highlight will appear in the Playwright UI, showing you the GUI state when the screenshot was taken
3. You can also see the debug logs within the Console or Error tabs.
![CleanShot 2024-03-08 at 12 27 49](https://github.com/dashcamio/goodlooks/assets/318295/011ec7ff-e5ce-444e-839a-4c3f74a9da5b)

## What part of the page is checked?

Only the visible part of the page is checked, not the full page. You must scroll to check other page parts.

## What are the limits?

The AI is great at identifying what is in an image, but it's not great at identifying where those things are in relation to other things. For example, don't ask GoodLooks to count items to validate their position on the screen.

# Other Projects

- [TestDriver.ai](https://testdriver.ai?ref=goodlooks) - AI QA Agent for GitHub
- [Dashcam.io](https://dashcam.io?ref=goodlooks) - Instant Replay for Software Testing
