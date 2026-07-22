import {test, expect} from '@playwright/test'
import { HeaderComponent } from '../pages/HeaderComponent.js';

export class HomePage {

    constructor(page) {
      this.page = page;
      this.logoutButton = this.page.locator('.fa-lock');
      this.testCasesTitle = this.page.locator('.title > b');
      this.headerComponent = new HeaderComponent(page);
    }

    async verifyUserIsOnHomePage() {
        await expect(this.logoutButton, 'Logout button is not visible').toBeVisible();
        await expect(this.page).toHaveTitle('Automation Exercise')
    }

    async logout() {
        await this.logoutButton.click();
    }

    async verifyTestCaseTitleIsDisplayed() {
        // If test step is declared, it will shown in html report.
        return test.step('Verify the test case title visibility in test cases page', async() => {
            await expect(this.testCasesTitle).toBeVisible();
        });
    }

}