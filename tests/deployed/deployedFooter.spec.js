import { test, expect } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page }) => {
  await page.goto("http://medexperts.io/");
  await page.getByRole("link", { name: "Med Expert Logo" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByTestId("github-link").click();
  const page1 = await page1Promise;
  await page1.waitForLoadState();

  const page2Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByTestId("insta-link").click();
  const page2 = await page2Promise;
  await page2.waitForLoadState();

  const page3Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByTestId("linkedin-link").click();
  const page3 = await page3Promise;
  await page3.waitForLoadState();

  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.getByRole("link", { name: "About Us" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill(`${process.env.USER_U}`);
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill(`${process.env.USER_P}`);
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByRole("link", { name: "Share Feedback" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
});
