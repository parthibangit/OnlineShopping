import { test, expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailAddress = this.page.locator("//input[@data-qa='login-email']");
        this.password = this.page.locator("//input[@data-qa='login-password']");
        this.loginButton = this.page.locator("//button[@data-qa='login-button']");
    }

    async goToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(email, password) {
        // If test step is declared, it will shown in html report.
        return test.step('Log into application by providing login credentials', async () => {
            await this.emailAddress.fill(email);
            await this.password.fill(password);
            await this.loginButton.click();
        });
    }

    async verifyLogoutSuccess() {
        await expect(this.loginButton, 'Login button is not visible').toBeVisible();
        await expect(this.page).toHaveTitle('Automation Exercise - Signup / Login')
    }

}