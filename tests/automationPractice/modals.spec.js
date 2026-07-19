import {test} from "@playwright/test"

test('Handle the "modals"', async({page}) => {

    await page.goto('https://practice-automation.com/modals/');

    // Not needed to use any events or actions to handle modals.
    await page.locator('id=simpleModal').click();
    const modalTitle = await page.locator('#pum_popup_title_1318').textContent();
    console.log('Modal title is: '+ modalTitle.trim())
});