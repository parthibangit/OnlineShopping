import { test, expect}  from '../../fixtures/PageFixtures';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage(process.env.TEST_URL);
});

test.only('Login into application and verify success',{tag: '@pageFixture'}, async({loginPage, homePage, testData}) => {
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await homePage.verifyUserIsOnHomePage();
    await expect(testData.successMessage.login).toEqual('User has logged in successfully!!');
    console.log('Login success message: ========= '+ testData.successMessage.login + ' =============')
});

test('Logout from application and verify success', {tag: '@pageFixture'}, async({loginPage, homePage, testData}) => {
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await homePage.verifyUserIsOnHomePage();
    await homePage.logout();
    await loginPage.verifyLogoutSuccess();
    console.log('Logout success message: ======== '+ testData.successMessage.logout + ' =============')
});
