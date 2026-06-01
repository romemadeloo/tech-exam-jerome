import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Known defects @known-bug', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('BUG-001 empty user ID with populated password should not return a server error', async ({
    page,
    loginPage
  }) => {
    test.fail(true, 'Known defect: the app currently returns HTTP 500 / NullPointerException.');

    await loginPage.login('', 'anyPassword123');

    await expect(page.locator('body')).not.toContainText('NullPointerException');
    await expect(page.locator('body')).not.toContainText('HTTP Status 500');
  });

  test('BUG-002 password label should be associated with the password field', async ({ loginPage }) => {
    test.fail(true, 'Known defect: label for="password" points to a field with no matching id.');

    await expect(loginPage.passwordInput).toHaveAttribute('id', 'password');
  });

  test('BUG-003 keyboard tab order should move from user ID to password before submit', async ({
    page,
    loginPage
  }) => {
    test.fail(true, 'Known defect: tabindex sends focus from user ID to Login before Password.');

    await loginPage.userIdInput.focus();
    await page.keyboard.press('Tab');

    await expect(loginPage.passwordInput).toBeFocused();
  });
});
