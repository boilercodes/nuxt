import { test } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");
});
