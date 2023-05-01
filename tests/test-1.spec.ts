import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/login');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('cyn@lol.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter password').fill('C&nth789!');
  await page.getByPlaceholder('Enter password').press('Enter');
  await page.getByRole('button', { name: 'Share your feedback with MedExperts' }).click();
  await page.locator('#sq_100').getByPlaceholder('Select...').click();
  await page.getByText('Search Engine (e.g. Google, Yahoo, Bing)').click();
  await page.getByPlaceholder('Select...').click();
  await page.getByRole('option', { name: 'Once a month' }).locator('div').click();
  await page.getByRole('row', { name: 'MedExperts questions helped me prepare for my exams Strongly agree Agree Neutral Disagree Strongly disagree' }).getByRole('cell', { name: 'Neutral' }).locator('span').first().click();
  await page.getByRole('row', { name: 'The difficulty level of the questions accurately reflects their actual difficulty level Strongly agree Agree Neutral Disagree Strongly disagree' }).getByRole('cell', { name: 'Neutral' }).locator('span').first().click();
  await page.getByRole('row', { name: 'I am satisfied with the quality of the questions on MedExperts Strongly agree Agree Neutral Disagree Strongly disagree' }).getByRole('cell', { name: 'Neutral' }).locator('span').first().click();
  await page.getByRole('row', { name: 'I would recommend MedExperts to a friend or colleague Strongly agree Agree Neutral Disagree Strongly disagree' }).getByRole('cell', { name: 'Neutral' }).locator('span').first().click();
  await page.getByRole('row', { name: 'MedExperts is easy to navigate and visually appealing Strongly agree Agree Neutral Disagree Strongly disagree' }).getByRole('cell', { name: 'Neutral' }).locator('span').first().click();
  await page.locator('#sq_103').getByRole('textbox', { name: 'Is there anything else we could do to improve your experience on MedExperts (e.g. accessibility, design, content, etc.)?' }).click();
  await page.locator('#sq_103').getByRole('textbox', { name: 'Is there anything else we could do to improve your experience on MedExperts (e.g. accessibility, design, content, etc.)?' }).fill('NA');
  await page.locator('#sq_104').getByRole('textbox', { name: 'Are there any other features you\'d like to see included?' }).click();
  await page.locator('#sq_104').getByRole('textbox', { name: 'Are there any other features you\'d like to see included?' }).fill('NA');
  await page.locator('div').filter({ hasText: /^Complete$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
});