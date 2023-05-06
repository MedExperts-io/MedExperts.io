import { test } from "@playwright/test";

require("dotenv").config();

test("test", async ({ page }) => {
  await page.route("**/api/user_feedback/response", (route) => {
    if (route.request().method() == "POST") route.abort();
  });

  await page.goto("http://medexperts.io/");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByText("Login").nth(1).click();
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill(`${process.env.USER_U}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByText("Login").nth(1).click();
  await page.getByPlaceholder("Enter password").click();
  await page.getByPlaceholder("Enter password").fill(`${process.env.USER_P}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();

  const button = await page.getByRole("button", {
    name: "Share your feedback with MedExperts",
  });

  if (button) {
    await button.click();

    await page
      .getByRole("combobox", { name: "How did you hear about MedExperts?" })
      .getByRole("combobox", {
        name: "How did you hear about MedExperts?",
        exact: true,
      })
      .filter({ hasText: "Clear" })
      .click();

    await page.getByText("Instagram").click();

    await page
      .getByRole("combobox", { name: "How frequently do you use MedExperts?" })
      .getByRole("combobox", {
        name: "How frequently do you use MedExperts?",
        exact: true,
      })
      .filter({ hasText: "Clear" })
      .click();

    await page.getByText("Several times a week").click();

    await page
      .getByRole("row", {
        name: "MedExperts questions helped me prepare for my exams Strongly agree Agree Neutral Disagree Strongly disagree",
      })
      .getByRole("cell", { name: "Neutral" })
      .locator("span")
      .first()
      .click();
    await page
      .getByRole("row", {
        name: "The difficulty level of the questions accurately reflects their actual difficulty level Strongly agree Agree Neutral Disagree Strongly disagree",
      })
      .getByRole("cell", { name: "Neutral" })
      .locator("span")
      .first()
      .click();
    await page
      .getByRole("row", {
        name: "I am satisfied with the quality of the questions on MedExperts Strongly agree Agree Neutral Disagree Strongly disagree",
      })
      .getByRole("cell", { name: "Neutral" })
      .locator("span")
      .first()
      .click();
    await page
      .getByRole("row", {
        name: "I would recommend MedExperts to a friend or colleague Strongly agree Agree Neutral Disagree Strongly disagree",
      })
      .getByRole("cell", { name: "Neutral" })
      .locator("span")
      .first()
      .click();
    await page
      .getByRole("row", {
        name: "MedExperts is easy to navigate and visually appealing Strongly agree Agree Neutral Disagree Strongly disagree",
      })
      .getByRole("cell", { name: "Neutral" })
      .locator("span")
      .first()
      .click();

    await page
      .locator("#sq_103 div")
      .filter({
        hasText:
          "4. Is there anything else we could do to improve your experience on MedExperts (",
      })
      .click();
    await page
      .locator("#sq_103")
      .getByRole("textbox", {
        name: "Is there anything else we could do to improve your experience on MedExperts (e.g. accessibility, design, content, etc.)?",
      })
      .fill("NA");
    await page
      .locator("#sq_104 div")
      .filter({
        hasText: "5. Are there any other features you'd like to see included?",
      })
      .click();
    await page
      .locator("#sq_104")
      .getByRole("textbox", {
        name: "Are there any other features you'd like to see included?",
      })
      .fill("NA");

    await page.getByRole("button", { name: "Complete" }).click();

    await page.getByRole("button", { name: "Close" }).click();
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Logout" }).click();
  }
});
