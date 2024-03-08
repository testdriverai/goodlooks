![GoodLooks Logo](https://github.com/dashcamio/goodlooks/assets/318295/feb1d637-f1b0-48a2-8fd7-d4b855ad93bd)

# Visually Validate Playwright Tests Without Flaky Selectors

Static selectors can't validate if a site "looks good" to a user. Is the site responsive? Is the correct image showing? These kinds of tests are impossible to validate with selectors alone and take a lot of time to validate manually. GoodLooks.ai lets you validate these kinds of requirements with natural language prompts. 

## Demo

### Diversity

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
goodlooks.configure("zpka_05acaa405814447ba022449aa073fef5_78748307");

test("diversity", async ({ page }) => {
  await page.goto("https://diversityequityinclusion.com/about/");
  await expect(page).goodlooks("diverse people show up");
});
```

</td>
</tr>
<tr>
  <td colspan=2><strong>Explanation</strong></td>
</tr>
<tr>
  <td colspan=2>
    The page includes a collage of images featuring various individuals in different settings and professional environments, indicative of a diverse group of people. This aligns with the theme of "Diversity Equity Inclusion" that is prominently displayed on the page.
  </td>
</tr>
</table>


## Setup

### Install via NPM

```
npm install goodlooks
```

### Configure

```js
const { test, expect, devices } = require("@playwright/test");
const goodlooks = require("./plugin.js");
goodlooks.configure("key");
expect.extend(goodlooks);
```

### Use!


- mobile responsive
- design, spacing
- images


- takes account of the visible screen
