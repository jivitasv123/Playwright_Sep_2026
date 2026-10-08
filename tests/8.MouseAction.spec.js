const { test, expect } = require('@playwright/test');

test('Mouse Actions', async ({ page }) => {

    await page.goto('https://www.myntra.com/');
    let home = await page.locator('//a[@data-group="home"]');
    await home.hover();
    await page.waitForTimeout(2000);
    //To freeze the hover state - 1. ctrl+shift+c  2)Goto=Source==> fn+F8 ==> Pause the debugger ==> Click on the 
    // element to freeze the hover state 3)Selector hub extension ==> Turn on Debugger

    await page.click("//a[text()='Clocks']")
    let currentUrl = await page.url();
    expect(currentUrl).toContain('clocks');

    let filters = await page.locator("//span[text()='FILTERS']");
    await filters.dblclick();
    await page.waitForTimeout(3000);

    await page.mouse.wheel(0, 3050); // Scroll down 
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, -1050); // Scroll down 

    await page.goto('https://demo.automationtesting.in/Dynamic.html');

    let reg = await page.locator("//a[text()='Register']");
    await reg.click({ button: 'right' });
    await page.waitForTimeout(3000);

    let source = await page.locator('#mongo');
    let target = await page.locator('#droparea')

    await source.dragTo(target);
    await page.waitForTimeout(3000);

    await page.dragAndDrop('#node', '#droparea');
    await page.waitForTimeout(3000);

});