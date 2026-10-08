const { test, expect } = require('@playwright/test');

test('Single Dropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('India'); //TEXT

    await page.waitForTimeout(2000);
    await page.selectOption('#country', { index: 7 }) //INDEX

    await page.waitForTimeout(2000);
    await page.selectOption('#country', { value: 'canada' }) //VALUE
    await page.waitForTimeout(2000);


});

test('Multi Dropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#colors').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    await page.locator('#colors').selectOption(['Red', 'White', 'Green']); //TEXT

    await page.waitForTimeout(2000);
    await page.selectOption('#colors', [{ index: 0 }, { index: 4 }]) //INDEX
});


test('Text Content', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    let countries = await page.$$("//select[@id='country']/child::option");

    for (let i = 0; i < countries.length; i++) {
        let data = await countries[i].textContent();
        if (data.trim() === 'China') {
            let value = await countries[i].getAttribute('value');
            await page.waitForTimeout(2000);
            await page.locator('#country').selectOption(value)
            await page.waitForTimeout(2000);
            break;
        }

    }

});


