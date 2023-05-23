import { test, expect } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page
    .getByTestId("footer")
    .locator("div")
    .filter({ hasText: "Contact Us •About Us" });

  await page.getByTestId("about us link").click();
  await page.getByTestId("contact us link").click();

  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill(`${process.env.USER_U}`);
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill(`${process.env.USER_P}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();

  await page.getByText("Contact Us •About Us•Share Feedback").click();

  await page.getByTestId("feedback link").click();
  await page.getByRole("button", { name: "Profile" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
});
