import { test, expect } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page, context }) => {
  await page.goto("http://medexperts.io/");
  await page.getByRole("link", { name: "Med Expert Logo" }).click();

  const link1Target = page.waitForEvent("popup");
  await page.getByTestId("footer").getByTestId("github-link").click();
  const popup1 = await link1Target;
  await popup1.waitForLoadState();
  await expect(popup1).toHaveURL(
    "https://github.com/MedExperts-io/MedExperts.io"
  );

  const link2Target = page.waitForEvent("popup");
  await page.getByTestId("footer").getByTestId("insta-link").click();
  const popup2 = await link2Target;
  await popup2.waitForLoadState();
  await expect(popup2).toHaveURL("https://www.instagram.com/medexperts.io/");

  const link3Target = page.waitForEvent("popup");
  await page.getByTestId("footer").getByTestId("linkedin-link").click();
  const popup3 = await link3Target;
  await popup3.waitForLoadState();
  const url = await popup3.url();
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
