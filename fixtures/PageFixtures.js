import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import  path  from 'path';
import  fs  from 'fs'

export const test = base.extend({
  
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  testData: async ({}, use) => {
    const env = process.env.ENV || 'uat';
    const filePath = path.resolve(__dirname, `../environments/${env}/testData.${env}.json`);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    await use(data);
  },

});

export { expect };