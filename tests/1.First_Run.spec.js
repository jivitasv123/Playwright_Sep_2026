const { test, expect } = require('@playwright/test');

test('Launch my application', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    //1.
    await page.click("//a[@id='signin2']");

    //2.
    //await page.locator("//a[@id='signin2']").click();

    await page.locator("//input[@id='sign-username']").fill("Testuser");

    await page.waitForTimeout(2000);

    await page.locator("//input[@id='sign-password']").fill("Pass@123");

    await page.waitForTimeout(2000);

    await page.locator("//button[text()='Sign up']").click();



})


