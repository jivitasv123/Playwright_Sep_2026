const { test, expect } = require('@playwright/test');

test('CheckBox and Radio Button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#female').check();
    await page.waitForTimeout(2000);
    let male = await page.locator('#male')
    male.check();
    await page.waitForTimeout(2000);

    await expect(male).toBeChecked();

    let tuesday = await page.locator('#tuesday');
    tuesday.check();
    await page.waitForTimeout(2000);
    await expect(tuesday).toBeChecked();

    await expect.soft(tuesday.isChecked()).toBe(true);

    let days = await page.$$("//label[@for='days']/parent::div/child::div/input");
    let count = await days.length;
    console.log("Total Days : " + count);

    // for (let d of days) {
    //     await d.check();
    //     await page.waitForTimeout(2000);
    // }

    await days[1].check();
    await days[5].check();
    await tuesday.uncheck();
    await page.waitForTimeout(2000);

    await expect(tuesday).not.toBeChecked();


});