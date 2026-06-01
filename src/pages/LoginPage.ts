import { expect, type Locator, type Page } from '@playwright/test';

import { appLabels } from '../fixtures/test-data';

export class LoginPage {
  readonly page: Page;
  readonly form: Locator;
  readonly heading: Locator;
  readonly logo: Locator;
  readonly userIdInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly warningMessage: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.form = page.locator('#loginForm');
    this.heading = page.getByRole('heading', { name: appLabels.loginHeading, exact: true });
    this.logo = page.getByRole('img', { name: 'login page' });
    this.userIdInput = page.locator('#uid');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('#loginSubmit');
    this.warningMessage = page.locator('.warnmessage');
    this.footer = page.getByText(appLabels.footer);
  }

  async goto(): Promise<void> {
    await this.page.goto('login');
    await this.expectLoaded();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/login$/);
    await expect(this.form).toBeVisible();
    await expect(this.heading).toBeVisible();
    await expect(this.userIdInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.userIdInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async expectWarning(message: string): Promise<void> {
    await expect(this.warningMessage).toContainText(message);
  }
}
