import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  const page1Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByRole("link").first().click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByRole("link").nth(1).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent("popup");
  await page.locator("#footer").getByRole("link").nth(2).click();
  const page3 = await page3Promise;
  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.getByRole("link", { name: "About Us" }).click();
  await page.getByRole("link", { name: "About Us" }).click();
  await page.getByRole("link", { name: "Med Expert Logo" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill(`${process.env.USER_U}`);
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill(`${process.env.USER_P}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByRole("link", { name: "Share Feedback" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
});
