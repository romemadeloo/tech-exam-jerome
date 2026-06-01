import { test, expect } from '../../src/fixtures/test-fixtures';
import { appLabels, credentials } from '../../src/fixtures/test-data';

test.describe('Login page navigation and form behavior @navigation', () => {
  test('TC-NAV-001 login page renders the expected form controls @smoke', async ({ loginPage }) => {
    await loginPage.goto();

    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.heading).toHaveText(appLabels.loginHeading);
    await expect(loginPage.userIdInput).toHaveAttribute('name', 'uid');
    await expect(loginPage.passwordInput).toHaveAttribute('name', 'password');
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    await expect(loginPage.submitButton).toHaveValue(appLabels.loginButton);
    await expect(loginPage.footer).toBeVisible();
  });

  test('TC-NAV-002 successful login back link returns to the login page', async ({
    loginPage,
    loginCompletePage
  }) => {
    await loginPage.goto();
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    await loginCompletePage.expectLoaded();

    await loginCompletePage.returnToLogin();

    await loginPage.expectLoaded();
    await expect(loginPage.userIdInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC-NAV-003 login form is submitted through POST with browser autocomplete disabled', async ({
    loginPage
  }) => {
    await loginPage.goto();

    await expect(loginPage.form).toHaveAttribute('method', /post/i);
    await expect(loginPage.form).toHaveAttribute('autocomplete', 'off');
    await expect(loginPage.form).toHaveAttribute('action', /auth/);
  });
});
