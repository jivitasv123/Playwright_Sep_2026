
import { test, expect } from '@playwright/test';

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


    //let headerLinks = await page.$$('//ul[@id="menu-primary-items"]/child::li/a');
    // for (let i = 0; i < await headerLinks.length; i++) {

    //     await headerLinks[i].click();
    //     await page.waitForTimeout(2000);
    // }

    let headerLinks = await page.locator('nav a');
    for (let i = 0; i < await headerLinks.count(); i++) {
        await headerLinks.nth(i).click();
        await page.waitForTimeout(2000);
    }

});