import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('Input fields test', async({ page }) => {
  
  const firstName = faker.person.firstName();
  await page.goto('https://practice-automation.com/form-fields/');
  await page.getByTestId('name-input').fill(firstName);
});

test('Checkbox and radio selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // Check the checbox
  await page.getByRole('checkbox', {name: 'Water'}).check();

  // uncheck the checkbox
  await page.getByTestId('drink1').uncheck();

  // assert the checkbox to be selected
  expect(page.getByTestId('drink1')).toBeChecked();

  // Check the radio button
  await page.locator('id=color1').check();

});

test('Drop down selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  
  // Select the value by label 
  await page.getByTestId('automation').selectOption({label: 'Yes'});

  // Select the value by value 
  await page.getByTestId('automation').selectOption({value: 'yes'});

  // Select multi values in drop down
  await page.getByTestId('automation').selectOption(['Yes', 'No'])

});

test('Click operations', {tag : "@click"}, async({ page }) => {

  await page.goto('https://practice-automation.com/click-events/');

  // basic click
  await page.getByText('Cat').click();

  // double click
  await page.getByText('Dog').dblclick();

  // hover the element
  await page.getByText('Pig').hover();
  
  // Right click
  await page.getByText('Cow').click({button: 'right'});
});