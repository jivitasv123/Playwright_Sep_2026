const { test, expect } = require('@playwright/test');

test('Upload file', async ({ page }) => {

    // await page.goto('https://the-internet.herokuapp.com/upload');
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.setInputFiles('#filesToUpload', 'C:\\Users\\jivit\\Downloads\\samplefile.jpeg'); //Single Upload

    await page.waitForTimeout(2000);

    await page.setInputFiles('#filesToUpload', ['C:\\Users\\jivit\\Downloads\\samplefile.jpeg',
        'C:\\Users\\jivit\\Downloads\\Programs.pdf',
        'C:\\Users\\jivit\\OneDrive\\Pictures\\DSC07395.jpg'],
    ); //Multiple Upload


    await page.waitForTimeout(5000);

    await page.setInputFiles('#filesToUpload', []); //Remove Uploaded Files

});