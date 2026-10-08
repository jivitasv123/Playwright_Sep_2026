const { test, expect, chromium, firefox, webkit } = require('@playwright/test');




test('Creation of pages & Windows', async () => {


    let browser = await chromium.launch();
    let context1 = await browser.newContext();
    let context2 = await browser.newContext();
    let context3 = await browser.newContext();

    let pageA = await context1.newPage();
    await pageA.goto('https://ticketnew.com/movies/chennai');

    let tab1 = await context2.newPage();
    await tab1.goto('https://www.flipkart.com/');

    let tab2 = await context2.newPage();
    await tab2.goto('https://testautomationpractice.blogspot.com/');

    let tab3 = await context2.newPage();
    await tab3.goto('https://www.myntra.com/');

    const allPages = await context2.pages();
    console.log(allPages.length)
    await tab2.bringToFront();
    await allPages[1].fill('#email', "Success");
    await tab2.pause();

});

test.only('Window Navigation', async () => {
    let browser = await chromium.launch();
    let context1 = await browser.newContext();
    let page = await context1.newPage();
    await page.goto('https://www.myntra.com/');
    let home = await page.locator('//a[@data-group="home"]');
    await home.hover();
    await page.waitForTimeout(2000);

    await page.click("//a[text()='Clocks']")
    //Enable
    const Tabswitch = context1.waitForEvent('page');
    //Click Clocks - Trigger new tab
    await page.locator('.results-base li:nth-child(21)').click();
    let nextTab = await Tabswitch;
    await nextTab.waitForTimeout(2000);
    await nextTab.locator("//div[text()='ADD TO BAG']").click();
    await nextTab.click("//span[text()='Bag']");
    await nextTab.waitForTimeout(2000);
    await page.bringToFront()
    let kids = await page.locator('//a[@data-group="Kids"]');
    await kids.hover();
    await nextTab.waitForTimeout(2000);


})


