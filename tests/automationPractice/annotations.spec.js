import {test, expect} from '@playwright/test';

test('Input fields test', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Checkbox selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Radio button selection', async({ page, browserName }) => {

  test.slow(browserName === 'chromium', 'Slowing the test to see the automation interation on browser...')
  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Drop down selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});