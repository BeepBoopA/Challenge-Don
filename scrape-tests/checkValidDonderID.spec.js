// @ts-check
import { test, expect } from '@playwright/test';
import 'dotenv/config'

test('DonderExists', async ({ page }) => {
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
});