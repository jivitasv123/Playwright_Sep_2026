const { test, expect } = require('@playwright/test');


test('WebTable', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let rows = await page.locator('[name="BookTable"] tbody tr');
    let rowCount = await rows.count();
    console.log("Rows Count " + rowCount)


    let columns = await page.locator('[name="BookTable"] tbody tr th');
    let columnCount = await columns.count();

    console.log(`Column Count : ${columnCount}`);

    let Specific_Row = await page.locator('[name="BookTable"] tbody tr:nth-child(4) td');
    let text = await Specific_Row.allTextContents();
    console.log(`Row 3: ${text}`);

    let data = await page.locator('[name="BookTable"] tbody tr:nth-child(4) td:nth-child(3)').textContent();

    console.log(`Particular Data: ${data}`);

    for (let i = 2; i <= rowCount; i++) {
        let allData = await page.locator(`//table[@name='BookTable']/tbody/tr[${i}]/td`).allTextContents();
        console.log(`Row ${i} :  ${allData}`)
    }

})

test.only('WebTable2', async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/table/tableWithCheck?scenario=1');
    await page.locator("//table/tbody/tr/td[text()='SAMSUNG Galaxy']/parent::tr/descendant::input").check();
    let button = await page.locator('#deleteButton');
    await expect(button).toBeEnabled();


});