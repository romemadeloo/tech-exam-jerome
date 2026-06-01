import { test, expect } from '../../src/fixtures/test-fixtures';
import { credentials, messages } from '../../src/fixtures/test-data';

test.describe('Login validation @auth @validation', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('TC-VAL-001 unknown user ID shows a user-facing warning', async ({ loginPage }) => {
    await loginPage.login(credentials.unknownUser.username, credentials.unknownUser.password);

    await expect(loginPage.page).toHaveURL(/\/auth(?:;jsessionid=[A-Z0-9]+)?$/);
    await loginPage.expectWarning(messages.invalidUserId);
    await expect(loginPage.userIdInput).toHaveValue(credentials.unknownUser.username);
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC-VAL-002 wrong password for an existing user shows a mismatch warning', async ({ loginPage }) => {
    await loginPage.login(credentials.wrongPassword.username, credentials.wrongPassword.password);

    await expect(loginPage.page).toHaveURL(/\/auth(?:;jsessionid=[A-Z0-9]+)?$/);
    await loginPage.expectWarning(messages.invalidPassword);
    await expect(loginPage.userIdInput).toHaveValue(credentials.wrongPassword.username);
    await expect(loginPage.passwordInput).toHaveValue('');
  });

  test('TC-VAL-003 blank password shows required-password validation', async ({ loginPage }) => {
    await loginPage.login(credentials.validUser.username, '');

    await expect(loginPage.page).toHaveURL(/\/auth(?:;jsessionid=[A-Z0-9]+)?$/);
    await loginPage.expectWarning(messages.passwordRequired);
    await expect(loginPage.userIdInput).toHaveValue(credentials.validUser.username);
  });

  test('TC-VAL-004 blank credentials are rejected without authenticating', async ({ loginPage }) => {
    await loginPage.login('', '');

    await expect(loginPage.page).toHaveURL(/\/auth(?:;jsessionid=[A-Z0-9]+)?$/);
    await loginPage.expectWarning(messages.passwordRequired);
    await expect(loginPage.passwordInput).toHaveValue('');
  });
});
