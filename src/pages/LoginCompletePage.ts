import { expect, type Locator, type Page } from '@playwright/test';

import { appLabels, messages } from '../fixtures/test-data';

export class LoginCompletePage {
  readonly page: Page;
  readonly completionMessage: Locator;
  readonly backLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completionMessage = page.getByText(messages.loginComplete);
    this.backLink = page.getByRole('link', { name: appLabels.backLink });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/auth(?:;jsessionid=[A-Z0-9]+)?$/);
    await expect(this.completionMessage).toBeVisible();
    await expect(this.backLink).toBeVisible();
  }

  async returnToLogin(): Promise<void> {
    await this.backLink.click();
  }
}
