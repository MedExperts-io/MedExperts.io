import { test, expect } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page, context }) => {
  await page.goto("http://localhost:8080");
  await page.getByRole("link", { name: "Med Expert Logo" }).click();

  const [link1Target] = await Promise.all([
    context.waitForEvent("page"),
    page.click('a[data-testid="github-link"]'),
  ]);

  const [link2Target] = await Promise.all([
    context.waitForEvent("page"),
    page.click('a[data-testid="insta-link"]'),
  ]);

  const [link3Target] = await Promise.all([
    context.waitForEvent("page"),
    page.click('a[data-testid="linkedin-link"]'),
  ]);

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
