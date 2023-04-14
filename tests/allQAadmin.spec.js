import { test, expect } from '@playwright/test';
require("dotenv").config();

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill(`${process.env.ADMIN_U}`);
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill(`${process.env.ADMIN_P}`);
  await page.locator('form[name="login"]').getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Questions' }).click();
  await page.getByRole('link', { name: 'Question Number 1, difficulty: Moderate' }).click();
  await page.getByRole('button', { name: 'View Explanation' }).click();

  await page.getByRole('button', { name: 'View References' }).click();

  await page.getByRole('link', { name: 'All Questions' }).click();
  await page.getByRole('button', { name: 'All Levels' }).click();
  await page.getByRole('button', { name: 'Easy' }).click();
  await page.getByRole('link', { name: 'Question Number 15, difficulty: Easy' }).click();
  await page.goto('http://localhost:8080/questions');
  await page.getByRole('button', { name: 'All Categories' }).click();
  await page.getByRole('button', { name: 'Asthma' }).nth(1).click();
  await page.getByRole('button', { name: 'All Expertise' }).click();
  await page.getByRole('button', { name: 'Student' }).click();
  await page.getByRole('button', { name: 'Student' }).click();
  await page.getByRole('button', { name: 'All Expertise' }).click();
  await page.getByRole('button', { name: 'Frequency Sort' }).click();
  await page.getByRole('button', { name: 'Percent Correct Sort' }).click();
  await page.getByRole('button', { name: 'All Levels' }).click();
  await page.getByRole('button', { name: 'Moderate' }).click();

  await page.getByRole('link', { name: 'Question Number 87, difficulty: Moderate' }).click();
  await page.getByRole('link', { name: 'All Questions' }).click();
});
