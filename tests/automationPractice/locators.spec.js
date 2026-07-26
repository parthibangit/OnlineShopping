import {test} from "@playwright/test";

test('Selectors - property, CSS, and XPATH', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // using locator method
  await page.locator('id=name-input').fill('Parthiban Subburam');

  // passing css selector directly to the method
  await page.fill('#name-input', 'Parthiban Subburam');

  // passing XPATH selector directly to the method
  await page.fill("//input[@id='name-input']", 'Parthiban Subburam');

});

test('Built-in Selectors @built', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // It is useful when we have to element which has 'label' tag
  await page.getByLabel('Password').fill('Test123')

  // It is useful when we have to element which has 'data-testid' attribute
  await page.getByTestId('email').fill('test123@gmail.com')
  
  // It is useful when we have to element which has 'placeholder' attribute
  await page.getByPlaceholder('Enter message here').fill('This is for testing purpose...');

  // It is useful when we have to element which has 'text'
  await page.getByText('What is your favorite color?').textContent();

  // It is useful when we have to element which has 'title' attribute
  await page.getByTitle('').textContent();

  // It is useful when we have to locate image which has 'alt' attribute
  await page.getByAltText('automateNow Logo');

  // It is useful when we have to locate element based on role
  await page.getByRole('checkbox', { name: 'Water'}).click();

});