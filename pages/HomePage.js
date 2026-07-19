import {expect} from '@playwright/test'

export class HomePage {

    constructor(page) {
      this.page = page;
      this.logoutButton = this.page.locator('.fa-lock');
    }

    async verifyUserIsOnHomePage() {
        await expect(this.logoutButton, 'Logout button is not visible').toBeVisible();
        await expect(this.page).toHaveTitle('Automation Exercise')
    }

    async logout() {
        await this.logoutButton.click();
    }
}