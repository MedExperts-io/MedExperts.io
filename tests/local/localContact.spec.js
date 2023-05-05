import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8080/contact");

  console.log("node env inside test", process.env.NODE_ENV);
  await page.getByPlaceholder("Your name").click();
  await page.getByPlaceholder("Your name").fill("Test Name");
  await page.getByPlaceholder("Your name").press("Tab");
  await page.getByPlaceholder("Your email address").fill("Test@email.com");
  await page.getByPlaceholder("Your email address").press("Tab");
  await page.getByPlaceholder("Your message").click();
  await page
    .getByPlaceholder("Your message")
    .fill("Hi, this is a test message. ");
});
