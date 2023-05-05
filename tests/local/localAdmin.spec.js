// @ts-check

import { test } from "@playwright/test";
require("dotenv").config();

test("test", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByText("Login").nth(1).click();
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill(`${process.env.ADMIN_U}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByText("Login").nth(1).click();
  await page.getByPlaceholder("Enter password").click();
  await page.getByPlaceholder("Enter password").fill(`${process.env.ADMIN_P}`);
  await page
    .locator('form[name="login"]')
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByRole("button", { name: "Questions" }).click();
  await page.getByText("Student Progress").click();
  await page.getByText("All Levels & All Categories").click();
  await page.locator(".MuiChip-label").first().click();
  // await page.getByRole('button', { name: 'Heart button for question 1. Not Favorited' }).click();
  // await page.getByLabel('Favorites Only').check();
  // await page.locator('.justify-content-center > .card > .card-header').click();
  // await page.getByRole('button', { name: 'Heart button for question 1. Favorited' }).click();
  // await page.getByLabel('Favorites Only').uncheck();
  await page
    .getByRole("link", { name: /.*Question Number 1, difficulty:.*/i })
    .click();
  await page.getByRole("cell", { name: "Answer Options" }).click();
  await page.getByRole("cell", { name: "Responses" }).click();
  await page.getByRole("button", { name: "View Explanation" }).click();
  await page.getByRole("button", { name: "View References" }).click();
  await page.getByRole("link", { name: "All Questions" }).click();
  await page.getByRole("button", { name: "All Levels" }).click();
  await page.getByRole("button", { name: "Easy" }).click();
  await page.getByText("Easy & All Categories").click();
  await page.getByRole("button", { name: "All Categories" }).click();
  await page.getByRole("button", { name: "Bronchiectasis" }).nth(1).click();
  await page.getByText("Easy & Bronchiectasis").click();
  await page.getByRole("button", { name: "All Expertise" }).click();
  await page.getByRole("button", { name: "All Expertise" }).first().click();
  await page.getByRole("button", { name: "Frequency Sort" }).click();
  await page.getByRole("button", { name: "Percent Correct Sort" }).click();
  await page
    .getByRole("link", {
      name: "Question Number 39, difficulty: Easy",
    })
    .click();
  await page.getByText(/.*Question 39: .*/i).click();
  await page.getByRole("button", { name: "Delete Version" }).click();
  await page
    .locator("div")
    .filter({ hasText: /.*Delete version with unique ID .*/i })
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByRole("link", { name: "All Questions" }).click();
  await page
    .getByRole("button", { name: "Pulmonary Function Testing" })
    .click();
  await page.getByText("All Levels & Pulmonary Function Testing").click();
  await page.locator("#dropdown-basic").nth(1).click();
  await page.getByRole("button", { name: "All Categories" }).nth(1).click();
  await page.getByRole("button", { name: "..." }).click();
  await page.getByRole("button", { name: "Page 5" }).click();
  await page.getByRole("button", { name: "Profile" }).click();
  await page.getByText("Edit My Profile").click();
  await page.getByRole("button", { name: "Logout" }).click();
  await page.getByRole("heading", { name: "Welcome to MedExperts" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Login").nth(1).click();
});
