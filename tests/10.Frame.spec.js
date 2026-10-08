const { test, expect } = require('@playwright/test');

test('Alert Handling', async ({ page }) => {

    await page.goto('https://letcode.in/frame/'); //Launch
    //Switch to Iframe
    let frame1 = await page.frame({ name: 'firstFr' });
    //Interact with element
    await frame1.locator("//input[@name='fname']").fill("JIvita");
    await page.waitForTimeout(2000);

    await page.mainFrame();

    await page.frameLocator('#firstFr').locator("//input[@name='lname']").fill("Learning");
    await page.waitForTimeout(2000);

    let innerframe = await page.frame({ url: 'https://letcode.in/innerframe' });
    await innerframe.locator("//input[@name='email']").fill("jivi12345@gmail.com")
    await page.waitForTimeout(2000);

    await innerframe.parentFrame();
    await frame1.locator("//input[@name='fname']").clear();
    await frame1.locator("//input[@name='fname']").fill('Success');

    await page.waitForTimeout(2000);


    await page.mainFrame();
    await page.click("//a[text()='Contact']");
    let currentUrl = await page.url();
    await expect(page).toHaveURL(currentUrl)





});