const { test, expect } = require('@playwright/test');

test('Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill("#user-name", "standard_user")
    await page.fill("#password", "secret_sauce")
    await page.click("#login-button")
    await page.waitForTimeout(2000)

    let currentUrl = await page.url();
    await expect(page).toHaveURL(currentUrl)
    console.log("URL Assertion Passed : " + currentUrl)


    var title = await page.title()
    await expect(page).toHaveTitle(title)
    console.log("Title Assertion Passed : " + title)

    let bag = await page.locator("//img[@alt='Sauce Labs']")
    await page.waitForTimeout(3000)
    await expect.soft(bag).toBeVisible()

    let products = await page.locator(".inventory_item_name");
    await expect.soft(products).toHaveCount(3)

    await page.goto("https://www.instagram.com/?hl=en")

    let loginButton = await page.locator("//span[text()='Log in']");

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toHaveText("Log in");
    await expect(loginButton).toBeDisabled();

    console.log("Login Button Assertion Passed")

    //await expect(loginButton).toBeEnabled();

    let user = await page.locator("//input[@name='email']");
    user.fill("TestUser")

    await expect(user).toHaveValue("12345");

    let password = await page.locator("//input[@name='pass']");
    password.fill("Test@123")

    await expect(loginButton).toBeEnabled();
    console.log("Login Button is Enabled")

    let fb = await page.locator("//span[text()='Log in with Facebook']");
    await expect(fb).toContainText("Facebook");


})