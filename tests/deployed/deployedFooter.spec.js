import { test, expect } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page, context }) => {
  await page.goto("http://medexperts.io/");
  await page.getByRole("link", { name: "Med Expert Logo" }).click();

  const [link1Target] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#footer").getByTestId("github-link").click(),
  ]);
  await link1Target.waitForLoadState();
  await expect(link1Target).toHaveURL(
    "https://github.com/MedExperts-io/MedExperts.io"
  );

  const [link2Target] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#footer").getByTestId("insta-link").click(),
  ]);
  await link2Target.waitForLoadState();
  await expect(link2Target).toHaveURL(
    "https://www.instagram.com/medexperts.io/"
  );

  const [link3Target] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#footer").getByTestId("linkedin-link").click(),
  ]);
  await link3Target.waitForLoadState();
  const url = await link3Target.url();
  const expectedURLRegex =
    /https:\/\/www\.linkedin\.com\/company\/medexperts-io(\/\?original_referer=.*)?/;
  expect(url).toMatch(expectedURLRegex);

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
