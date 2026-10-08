const { test, expect } = require('@playwright/test');

test('InBuilt Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    let logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Sandhya');
    await page.getByPlaceholder('Password').fill('Sandhya@123');

    await page.goto('https://www.flipkart.com/')
    await page.getByTitle('Cart').click();

    await page.goto('https://www.amazon.in/');
    await page.getByLabel('Search Amazon.in').fill('Bags');

    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    expect(await page.getByText('Products')).toBeVisible();

    await page.getByText('Sauce Labs Backpack').click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.waitForTimeout(2000);
});