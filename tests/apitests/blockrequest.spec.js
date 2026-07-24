import { test, expect, request } from '@playwright/test';

test('Block the request to simulate the API error', async ({ page }) => {

    // Block the URL to simulate the API error
    await page.route('**/form-fields/', async (route) => {

        // based on our need we can pass as 'failed', 'timedout', 'internetdisconnected'
        await route.abort('internetdisconnected');
    });

    await page.goto('https://practice-automation.com/form-fields/');

    // Click the first element from matching elements
    await page.locator("//input[@type='checkbox']").nth(0).click();

});

test('Simulate the 500 error', { tag: "@simulate" }, async ({ page }) => {

    await page.route('**/form-fields/', async (route) => {

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Internal Server Error' })
        });
    });

    await page.goto('https://practice-automation.com/form-fields/');

    // Click the first element from matching elements
    await page.locator("//input[@type='checkbox']").nth(0).click();

});