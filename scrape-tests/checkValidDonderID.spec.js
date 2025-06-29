// @ts-check
import { test, expect } from '@playwright/test';
import 'dotenv/config'

test('DonderExistsTrue', async ({ page }) => {
  await page.goto('https://donderhiroba.jp/login.php');
  await page.getByRole('img', { name: 'ログイン' }).click();

  // Fill Email & Password
  await page.locator('#mail')
            .fill(process.env.MAIN_BOT_EMAIL || 'Empty Beans');
  await page.locator('#pass')
            .fill(process.env.MAIN_BOT_PASSWORD || 'Empty Cheese');

  // Front End Validation + Login
  await page.keyboard.press('Tab');
  await page.locator('#btn-idpw-login').click();

  await page.getByText('ログイン').click();
  await page.goto('https://donderhiroba.jp/user_search.php?exec=1&keyword=594288502311');

  const donderExists = await page.locator('.friendArea.clearfix').isVisible();

  expect(donderExists).toBeTruthy();
});

test('DonderExistsFalse', async ({ page }) => {
  await page.goto('https://donderhiroba.jp/login.php');
  await page.getByRole('img', { name: 'ログイン' }).click();

  // Fill Email & Password
  await page.locator('#mail')
            .fill(process.env.MAIN_BOT_EMAIL || 'Empty Beans');
  await page.locator('#pass')
            .fill(process.env.MAIN_BOT_PASSWORD || 'Empty Cheese');

  // Front End Validation + Login
  await page.keyboard.press('Tab');
  await page.locator('#btn-idpw-login').click();

  await page.getByText('ログイン').click();
  await page.goto('https://donderhiroba.jp/user_search.php?exec=1&keyword=');

  const donderExists = await page.locator('.friendArea.clearfix').isVisible();

  expect(donderExists).toBeFalsy();
});