import { test, expect } from '@playwright/test';

export class HeaderComponent {

    constructor(page) {
        this.page = page;
        this.companyLogo = this.page.getByAltText('Website for automation practice');
        this.testCasesLink = this.page.locator("//a[@href='/test_cases']");
    }


    async clickTestCasesLink() {
        // If test step is declared, it will shown in html report.
        return test.step('Click test cases link on header', async () => {
            await this.testCasesLink.click();
        });
    }

    async verifyCompanyLogoPresence() {
        return test.step('Verify the company logo presence in header', async () => {
            await expect(this.companyLogo).toBeVisible();
        });
    }

}