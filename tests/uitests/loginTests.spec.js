import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(process.env.TEST_URL);
});

test('Login into application and verify success', { tag: '@pom' }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await homePage.verifyUserIsOnHomePage();
});

test('Logout from application and verify success', { tag: '@pom' }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await homePage.verifyUserIsOnHomePage();
    await homePage.logout();
    await loginPage.verifyLogoutSuccess();
});
