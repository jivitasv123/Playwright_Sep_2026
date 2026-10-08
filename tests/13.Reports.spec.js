const { test, expect } = require('@playwright/test');

test('WebTable', async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/table/tableWithCheck?scenario=1');
    await page.locator("//table/tbody/tr/td[text()='SAMSUNG Galaxy']/parent::tr/descendant::input").check();
    let button = await page.locator('#deleteButton');
    await expect(button).toBeEnabled();


})


test("validate website", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.fill('//input[@id="username"]', "student");
    await page.fill('//input[@id="password"]', "Password123");
    await page.click('//button[text()="Submit"]');
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

    var titles = await page.title();
    await expect(page).toHaveTitle(titles);
    console.log("the title is:" + titles);
})

test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'jjj' })).toBeVisible();
})

test.skip('Single Dropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('India'); //TEXT

    await page.waitForTimeout(2000);
    await page.selectOption('#country', { index: 7 }) //INDEX

    await page.waitForTimeout(2000);
    await page.selectOption('#country', { value: 'canada' }) //VALUE
    await page.waitForTimeout(2000);


});