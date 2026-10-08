const { test, expect } = require('@playwright/test');

test('Alert Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enable
    page.on('dialog', async popup => {
        let type = await popup.type();
        console.log(type);
        await expect(type).toBe('confirm')
        let msge = await popup.message();
        console.log(msge);
        await page.waitForTimeout(2000);
        await popup.dismiss();
    })


    //Trigger

    // await page.click('#alertBtn');
    await page.click('#confirmBtn');
    let result = await page.locator('#demo');
    let text = await result.textContent();
    await expect(text).toContain('Cancel');

});
