import { test, expect}  from '../../fixtures/PageFixtures';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage(process.env.TEST_URL);
    // await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
});

test('Login into application and verify success', {tag: '@pageFixture'}, async({loginPage, homePage, testData}) => {
    await homePage.verifyUserIsOnHomePage();
    await expect(testData.successMessage.login).toEqual('User has logged in successfully!!');
    await homePage.headerComponent.verifyCompanyLogoPresence();
    console.log('Login success message: ========= '+ testData.successMessage.login + ' =============')
});

test('Logout from application and verify success', {tag: '@pageFixture'}, async({loginPage, homePage, testData}) => {
    await homePage.verifyUserIsOnHomePage();
    await homePage.logout();
    await loginPage.verifyLogoutSuccess();
    console.log('Logout success message: ======== '+ testData.successMessage.logout + ' =============')
});

test.only('Click test cases link on home page header and verify test cases page title', {tag: '@pageFixture'}, async({homePage}) => {
    await homePage.headerComponent.clickTestCasesLink();
    await homePage.verifyTestCaseTitleIsDisplayed();
});
