const { test, expect } = require('@playwright/test');

test('Screenshot', async ({ page }) => {

    await page.goto('https://www.myntra.com/');
    let myntraHistory = await page.getByText('HISTORY OF MYNTRA');
    await expect(myntraHistory).toBeVisible();

    await page.screenshot({ path: 'Screenshots/myntra.png' });

    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'Screenshots/myntra2.png', fullPage: true });

    let logo = await page.locator("//div[@class='desktop-logoContainer']/child::a");

    await logo.screenshot({ path: 'Screenshots/logo.png' });
}); 